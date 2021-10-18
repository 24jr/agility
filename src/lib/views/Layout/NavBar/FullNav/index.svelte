<script>
  import NavItemDropdown from "./NavItemDropdown/index.svelte";
  import {
    links,
    availableContentHeight,
    isFullNavShown,
    isFullNavToggledOn,
  } from "$lib/views/Layout/store";
  import { slide } from "svelte/transition";
  import stopScrollPropagationY from "$lib/actions/stopScrollPropagationY";

  let fullNavHeight;
  $: isFullNavLarge = fullNavHeight && fullNavHeight / $availableContentHeight > 0.5;
</script>

{#if $isFullNavShown}
  {#if isFullNavLarge}
    <div
      class="underlay"
      on:wheel|stopPropagation|preventDefault
      on:touchmove|stopPropagation|preventDefault
      on:click={() => isFullNavToggledOn.set(false)}
    />
  {/if}
  <div class="container" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
    <div
      class="innerNav glasscard"
      style="--maxHeight: {$availableContentHeight - 30}px;"
      bind:offsetHeight={fullNavHeight}
      use:stopScrollPropagationY
    >
      {#each links as link (link.name)}
        <NavItemDropdown {link} />
      {/each}
    </div>
  </div>
{/if}

<style>
  .underlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(1rem);
  }
  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 9;
  }
  .innerNav {
    max-height: var(--maxHeight);
    overflow: scroll;
  }
</style>
