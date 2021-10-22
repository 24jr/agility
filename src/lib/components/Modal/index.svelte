<script>
  import X from "$lib/assets/static/icons/X/index.svelte";
  import { screenWidth, screenHeight, shownNavBarHeight } from "$lib/views/Layout/store"
  import { cubicOut } from "svelte/easing";
  import swipeHandler from "$lib/Actions/swipeHandler";

  export let isShown = false;
  export let type = "center"; // dropdown, center, full
  export let minWidth = 50;
  export let minHeight = 50;
  export let targetWidth
  export let targetHeight
  export let closeModalWatch = 1;
  export let openModalWatch = 1;
  export let isDisabled = false;

  $: if (closeModalWatch > 1) { closeModal() }
  $: if (openModalWatch > 1) { openModal() }
  function closeModal() { isShown = false }
  function openModal() {
    if (!isDisabled) {
      isShown = true;
    }
  }
  function toggleModal() {
    if (isDisabled) {
      isShown = false;
    } else {
      isShown = !isShown;
    }
  }

  let typeToUse = type;
  let baseEl;
  let modalEl;
  let contentEl;

  let modalLeftPos = 0;
  let modalBottomPos = 0;
  function calcPositions() {
    typeToUse = minWidth && $screenWidth && minWidth > $screenWidth - 10 ? "full" : type;
    if (baseEl && modalEl && $screenWidth && $screenWidth && typeToUse === "dropdown") {
      const baseRect = baseEl.getBoundingClientRect();
      const modalRect = modalEl.getBoundingClientRect();
      const baseWidth = baseRect.right - baseRect.left;
      const baseHeight = baseRect.bottom - baseRect.top;
      const modalWidth = modalRect.right - modalRect.left;
      const modalHeight = modalRect.bottom - modalRect.top;
      let modalCrossBaseVertically = false;
      if ($screenHeight - baseRect.bottom - 5 > modalHeight) {
        modalBottomPos = -modalHeight + "px";
      } else if (baseRect.bottom - baseHeight - 10 - $shownNavBarHeight > modalHeight) {
        modalBottomPos = baseHeight + "px";
      } else {
        modalBottomPos =
          baseRect.bottom - ($screenHeight + $shownNavBarHeight + modalHeight) / 2 + "px";
        modalCrossBaseVertically = true;
      }
      modalLeftPos = 0;
      const remaingingLeftSpace = baseRect.left;
      const remaingingRightSpace = $screenWidth - baseRect.left - modalWidth;
        if (modalCrossBaseVertically && $screenWidth - baseRect.right - 10 > modalWidth) {
        modalLeftPos = baseWidth + "px";
      } else if (modalCrossBaseVertically && baseRect.left - 10 > modalWidth) {
        modalLeftPos = -modalWidth + "px";
      } else if (remaingingLeftSpace < 10) {
        modalLeftPos = 10 - remaingingLeftSpace + "px";
      } else if (remaingingRightSpace < 10) {
        modalLeftPos = -10 + remaingingRightSpace + "px";
      }
    }
  }

  let modelWidth
  let modalHeight
  let scrollY

  $: {
    $screenWidth,
    $screenHeight,
    $shownNavBarHeight,
    scrollY,
    modelWidth,
    modalHeight,
    baseEl,
    modalEl,
    typeToUse,
    calcPositions();
  }

  function handleEvent(part, eventType, e) {
    if (part === "modal") {
      modalScroll(eventType, e);
    }
    if (eventType !== "touchstart" && eventType !== "touchend" && typeToUse !== "dropdown") {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  let touchStartY = null;
  let contentElScrollTopStartY = null;
  function modalScroll(eventType, e) {
    if (eventType === "wheel") {
      contentEl.scrollTop = contentEl.scrollTop + e.deltaY;
    } else if (eventType === "touchstart") {
      touchStartY = Math.round(e.targetTouches[0].clientY);
      contentElScrollTopStartY = contentEl.scrollTop;
    } else if (eventType === "touchmove") {
      contentEl.scrollTop =
        contentElScrollTopStartY + touchStartY - Math.round(e.targetTouches[0].clientY);
    }
  }

  function slideIn(node, { y, duration }) {
    return typeToUse === "full"
      ? {
          duration,
          css: (t, u) => {
            const eased = cubicOut(u);
            return `transform: translateY(${eased * y}px);`;
          },
        }
      : null;
  }

  function handleDownOverflowSwipe() {
    if (typeToUse === "full") {
      toggleModal();
    }
  }
</script>

<svelte:window bind:scrollY />

<div bind:this={baseEl} class="container">
  <div class="buttonDisplay" on:click={toggleModal}>
    <slot name="toggleButton" />
  </div>
  {#if isShown}
    <div
      class:underlayDropdown={typeToUse === "dropdown"}
      class:underlayCenter={typeToUse === "center" || typeToUse === "full"}
      on:click={toggleModal}
      on:scroll={(e) => handleEvent("underlay", "scroll", e)}
      on:touchstart={(e) => handleEvent("underlay", "touchstart", e)}
      on:touchmove={(e) => handleEvent("underlay", "touchmove", e)}
      on:touchend={(e) => handleEvent("underlay", "touchend", e)}
      on:wheel={(e) => handleEvent("underlay", "wheel", e)}
    />
    <div
      bind:this={modalEl}
      bind:clientWidth={modelWidth}
      bind:clientHeight={modalHeight}
      class="cardns modalBase"
      class:modalDropdown={typeToUse === "dropdown"}
      class:modalCenter={typeToUse === "center"}
      class:modalFull={typeToUse === "full"}
      style="--modalBottomPos: {modalBottomPos}; --modalLeftPos: {modalLeftPos};"
      on:scroll={(e) => handleEvent("modal", "scroll", e)}
      on:wheel={(e) => handleEvent("modal", "wheel", e)}
      on:touchstart={(e) => handleEvent("modal", "touchstart", e)}
      on:touchmove={(e) => handleEvent("modal", "touchmove", e)}
      on:touchend={(e) => handleEvent("modal", "touchend", e)}
      in:slideIn={{ y: $screenHeight, duration: 600 }}
      out:slideIn={{ y: $screenHeight, duration: 600 }}
    >
      <div
        class="contentBase"
        class:targetWidth={!isNaN(targetWidth)}
        class:targetHeight={!isNaN(targetHeight)}
        on:wheel|preventDefault
        use:swipeHandler
        on:downOverflowSwipe={handleDownOverflowSwipe}
        bind:this={contentEl}
        style="
          --minWidth: {minWidth}px;
          --targetWidth: {targetWidth}px;
          --minHeight: {minHeight}px;
          --targetHeight: {targetHeight}px;
          --maxFullHeight: {$screenHeight - $shownNavBarHeight - 40}px;"
      >
        <slot name="modalContent" {toggleModal} />
      </div>
      <div class="xBox" on:click={() => (isShown = false)}>
        <X />
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    position: relative;
    display: inline-block;
  }
  .buttonDisplay {
    position: relative;
    cursor: pointer;
  }
  .underlayDropdown {
    display: none;
  }
  .underlayCenter {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    background: rgba(0, 0, 0, 0.3);
  }
  .modalBase {
    background: var(--bg-modal);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .modalDropdown {
    position: absolute;
    z-index: 1;
    bottom: var(--modalBottomPos);
    left: var(--modalLeftPos);
    border-radius: 1rem;
    box-shadow: 0 0.3rem 2rem #00000044;
  }
  .modalCenter {
    position: fixed;
    z-index: 16;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    box-shadow: 0 1rem 5rem #000000dd;
  }
  .modalFull {
    position: fixed;
    z-index: 16;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 1rem 5rem #00000090;
  }
  .contentBase {
    min-width: minMax(var(--minWidth), 100%);
    max-width: 100vw;
    min-height: var(--minHeight);
    max-height: var(--maxFullHeight);
    padding: 0 1rem;
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .targetWidth {
    width: var(--targetWidth);
  }
  .targetHeight {
    height: var(--targetHeight);
  }
  .xBox {
    position: absolute;
    top: 0rem;
    right: 0rem;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    border-radius: 0.5rem;
  }
  .xBox:hover {
    background: var(--bg-highlight);
  }
</style>
