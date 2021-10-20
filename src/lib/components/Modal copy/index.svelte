<script>
  import X from "$lib/assets/static/icons/X/index.svelte";
  import { cubicOut } from "svelte/easing";
  import { shownNavBarHeight } from "$lib/views/Layout/store";
  import swipeHandler from "$lib/Actions/swipeHandler";

  export let showModal = false;
  export let type = "center"; // dropdown, center, full
  export let targetWidth = 500;
  export let targetHeight = 50;
  export let closeModalWatch = 1;
  export let openModalWatch = 1;
  export let isDisabled = false;

  $: if (closeModalWatch > 1) {
    closeModal();
  }
  $: if (openModalWatch > 1) {
    openModal();
  }
  function closeModal() {
    showModal = false;
  }
  function openModal() {
    if (!isDisabled) {
      showModal = true;
    }
  }
  function toggleModal() {
    if (isDisabled) {
      showModal = false;
    } else {
      showModal = !showModal;
    }
  }

  let typeToUse = type;

  let windowWidth;
  let windowHeight;
  let baseEl;
  let modalEl;
  let contentEl;

  let modalLeftPos = 0;
  let modalBottomPos = 0;
  function calcPositions() {
    typeToUse = targetWidth && windowWidth && targetWidth > windowWidth - 10 ? "full" : type;
    if (baseEl && modalEl && windowWidth && windowWidth && typeToUse === "dropdown") {
      const baseRect = baseEl.getBoundingClientRect();
      const modalRect = modalEl.getBoundingClientRect();
      const baseWidth = baseRect.right - baseRect.left;
      const baseHeight = baseRect.bottom - baseRect.top;
      const modalWidth = targetWidth;
      const modalHeight = modalRect.bottom - modalRect.top;
      let modalCrossBaseVertically = false;
      if (windowHeight - baseRect.bottom - 5 > modalHeight) {
        modalBottomPos = -modalHeight + "px";
      } else if (baseRect.bottom - baseHeight - 5 - $shownNavBarHeight > modalHeight) {
        modalBottomPos = baseHeight + "px";
      } else {
        modalBottomPos =
          baseRect.bottom - (windowHeight + $shownNavBarHeight + modalHeight) / 2 + "px";
        modalCrossBaseVertically = true;
      }
      const modalHalfWid = modalWidth / 2;
      const leftBaseEdgeToLeftModalEdge = modalHalfWid - baseWidth / 2;
      modalLeftPos = 0;
      const remaingingLeftSpace = baseRect.left - leftBaseEdgeToLeftModalEdge;
      const remaingingRightSpace = windowWidth - baseRect.right - leftBaseEdgeToLeftModalEdge;
      if (modalCrossBaseVertically && windowWidth - baseRect.right - 10 > modalWidth) {
        modalLeftPos = baseWidth + "px";
      } else if (modalCrossBaseVertically && baseRect.left - 10 > modalWidth) {
        modalLeftPos = -modalWidth + "px";
      } else if (remaingingLeftSpace < 5) {
        modalLeftPos = 5 - leftBaseEdgeToLeftModalEdge - remaingingLeftSpace + "px";
      } else if (remaingingRightSpace < 5) {
        modalLeftPos = -5 + remaingingRightSpace - leftBaseEdgeToLeftModalEdge + "px";
      }
    }
  }

  let modalOffsetHeight;
  let modalOffsetWidth;

  $: {
    windowWidth,
      windowHeight,
      $shownNavBarHeight,
      baseEl,
      modalEl,
      typeToUse,
      modalOffsetHeight,
      modalOffsetWidth;
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

  function myFly(node, { y, duration }) {
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

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div bind:this={baseEl} class="modal">
  <div class="buttonDisplay" on:click={toggleModal}>
    <slot name="toggleButton" />
  </div>
  {#if showModal}
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
      bind:offsetHeight={modalOffsetHeight}
      bind:offsetWidth={modalOffsetWidth}
      class="cardns mainModal"
      class:modalDropdown={typeToUse === "dropdown"}
      class:modalCenter={typeToUse === "center"}
      class:modalFull={typeToUse === "full"}
      style="--modalBottomPos: {modalBottomPos}; --modalLeftPos: {modalLeftPos};"
      on:scroll={(e) => handleEvent("modal", "scroll", e)}
      on:wheel={(e) => handleEvent("modal", "wheel", e)}
      on:touchstart={(e) => handleEvent("modal", "touchstart", e)}
      on:touchmove={(e) => handleEvent("modal", "touchmove", e)}
      on:touchend={(e) => handleEvent("modal", "touchend", e)}
      in:myFly={{ y: windowHeight, duration: 600 }}
      out:myFly={{ y: windowHeight, duration: 600 }}
    >
      <!-- <div
        class="contentBase"
        on:wheel|preventDefault
        use:swipeHandler
        on:downOverflowSwipe={handleDownOverflowSwipe}
        bind:this={contentEl}
        style="--targetWidth: {targetWidth}px; --maxHeight: {windowHeight -
          $shownNavBarHeight -
          40}px; --tagetHeight: {targetHeight}px;"
      > -->
      <div
        class="contentBase"
        bind:this={contentEl}
        style="--targetWidth: {targetWidth}px; --maxHeight: {windowHeight -
          $shownNavBarHeight -
          40}px; --tagetHeight: {targetHeight}px;"
      >
        <slot name="modalContent" {toggleModal} />
      </div>
      <div class="xBox" on:click={() => (showModal = false)}>
        <X />
      </div>
    </div>
  {/if}
</div>

<style scoped>
  .modal {
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
    /* top: 1rem; */
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 1rem 5rem #00000090;
  }
  .contentBase {
    width: var(--targetWidth);
    max-width: calc(100vw);
    min-height: var(--tagetHeight);
    max-height: var(--maxHeight);
    padding: 0 1rem;
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .mainModal {
    background: var(--bg-modal);
    padding: 1rem 0;
  }
</style>
