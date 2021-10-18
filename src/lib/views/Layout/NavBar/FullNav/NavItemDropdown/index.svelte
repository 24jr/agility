<script>
  export let link;
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { hoveredRouteName, linkClicks } from "$lib/views/Layout/store";
  import ArrowToggle from "$lib/assets/interactive/icons/ArrowToggle/index.svelte";
  import { slide } from "svelte/transition";

  let showDropdown = false;
  $: {
    $linkClicks, reset();
  }
  function reset() {
    showDropdown = false;
  }

  function toLink(linkPath) {
    linkClicks.update((n) => n + 1);
    goto(linkPath);
  }

  let windowWidth;
  let windowHeight;
  let buttEl;

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
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div on:mouseleave={exitAll}>
  <div
    class="buttonContainer"
    class:selRoute={pathBolded()}
    on:mouseenter={() => enterButton(link.name)}
    bind:this={buttEl}
    on:click={() => toLink(link.path)}
  >
    <h3 class="baseRoute">{link.name}</h3>
    {#if subLinks}
      <div
        class="arrow"
        on:click|preventDefault|stopPropagation={() =>
          (showDropdown = !showDropdown)}
        on:touchstart|preventDefault|stopPropagation={() =>
          (showDropdown = !showDropdown)}
      >
        <ArrowToggle direction={"up"} isOpen={showDropdown} />
      </div>
    {/if}
  </div>
  {#if showDropdown && subLinks}
    <div transition:slide={{ duration: 300 }}>
      {#each subLinks as subLink (subLink.name)}
        <div
          class="buttonContainer tabbedIn"
          on:click={() => toLink(link.path + subLink.path)}
        >
          <h3 class="baseRoute">{subLink.name}</h3>
        </div>
      {/each}
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
    height: 3rem;
    padding: 0.5rem 1rem;
    color: var(--contrast-med);
  }
  .buttonContainer:hover {
    color: var(--primary);
  }
  .arrow {
    display: flex;
    align-self: stretch;
    padding: 0.3rem 0 0.3rem 0.5rem;
  }
  .baseRoute {
    display: flex;
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    font-weight: 300;
  }
  .tabbedIn {
    padding-left: 3rem;
  }
  .selRoute {
    color: var(--primary);
  }
</style>
