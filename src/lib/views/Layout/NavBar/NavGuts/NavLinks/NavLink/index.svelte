<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import {
    hoveredRouteName,
    linkClicks,
    screenWidth,
    availableContentHeight,
    isNavBarShown,
  } from "$lib/views/Layout/store";
  import { fade } from "svelte/transition";
  import ArrowToggle from "$lib/assets/interactive/icons/ArrowToggle/index.svelte";
  import { dropdownID } from "./store";

  export let link;

  $: {
    $linkClicks, (showDropdown = false);
  }
  $: if ($dropdownID !== link.name || !$isNavBarShown) {
    showDropdown = false;
  }

  function toLink(linkPath) {
    goto(linkPath);
    linkClicks.update((n) => n + 1);
    showDropdown = false;
  }
  let showDropdown = false;

  let windowWidth;
  let windowHeight;
  const dropWid = 125;
  let buttEl;
  let dropX = 0;

  $: {
    buttEl, showDropdown, $screenWidth, setX();
  }

  function setX() {
    if (buttEl) {
      const res = buttEl.getBoundingClientRect();
      const buttX = res.x;
      const calcX =
        buttX < 5
          ? 5
          : buttX > windowWidth - dropWid - 5
          ? windowWidth - dropWid - 5
          : buttX;
      dropX = calcX;
    }
  }

  $: subLinks =
    link && link.subLinks && link.subLinks.length > 0 ? link.subLinks : null;

  $: pathBolded = () => {
    if (link && link.subLinks && link.subLinks.length > 0) {
      for (let i = 0; i < link.path.length - 1; i++) {
        if ($page.path[i] !== link.path[i]) {
          return false;
        }
      }
      return true;
    }
    return $page.path === link.path;
  };

  function enterButton(linkName) {
    showDropdown = true;
    hoveredRouteName.set(linkName);
  }
  function exitAll() {
    hoveredRouteName.set(null);
    showDropdown = false;
  }

  function toggleDropdown() {
    if (!showDropdown) {
      dropdownID.set(link.name);
    }
    showDropdown = !showDropdown;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div on:mouseleave={exitAll}>
  <div
    class="buttonContainer"
    bind:this={buttEl}
    class:selRoute={pathBolded()}
    on:mouseenter={() => enterButton(link.name)}
    on:click={() => toLink(link.path)}
  >
    <h4 class="baseRoute">{link.name}</h4>
    {#if subLinks}
      <div
        class="arrow"
        on:click|preventDefault|stopPropagation={toggleDropdown}
        on:touchstart|preventDefault|stopPropagation={toggleDropdown}
      >
        <ArrowToggle direction={"up"} isOpen={showDropdown} />
      </div>
    {/if}
  </div>
  {#if showDropdown && subLinks}
    <div
      class="dropdownModalContainer cardWrapper"
      transition:fade={{ duration: 200 }}
      style="--leftPos: {dropX}px; --dropWid: {dropWid}px;"
    >
      <div
        class="dropdownInner glasscard"
        style="--maxHeight: {$availableContentHeight - 20}px"
      >
        {#each subLinks as subLink (subLink.name)}
          <div
            class="buttonContainer"
            on:click={() => toLink(link.path + subLink.path)}
          >
            <h4 class="baseRoute">{subLink.name}</h4>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .buttonContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    padding: 0 1rem;
    color: var(--contrast-med);
  }
  .buttonContainer:hover {
    color: var(--primary);
  }
  .arrow {
    display: flex;
    align-self: stretch;
  }
  .dropdownModalContainer {
    position: fixed;
    padding-top: 0.5rem;
    z-index: 1;
    width: var(--dropWid);
    left: var(--leftPos);
  }
  .dropdownInner {
    position: relative;
    z-index: -1;
    max-height: var(--maxHeight);
    overflow: scroll;
  }
  .baseRoute {
    display: flex;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-weight: 400;
  }
  .selRoute {
    color: var(--primary);
  }
</style>
