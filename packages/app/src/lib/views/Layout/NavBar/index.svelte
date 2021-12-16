<script>
  import { navBarHeight, isAllNavBarHidden } from "../store";
  import NavGuts from "./NavGuts/index.svelte";
  import FullNav from "./FullNav/index.svelte";
  import intersectionObserver from "$lib/actions/intersectionObserver";

  let isAtTop = true;
</script>

<div
  class="container cardWrapper"
  use:intersectionObserver
  on:loaded={(e) => (isAtTop = e.detail)}
>
  <div class="navbar" bind:offsetHeight={$navBarHeight}>
    <div class:glasscard={!isAtTop} class:flatcard={isAtTop}>
      <NavGuts />
    </div>
  </div>
  <div class="fullNav">
    <FullNav />
  </div>
</div>

<style>
  .container {
    position: sticky;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    flex: 0;
  }
  .fullNav {
    position: relative;
    z-index: -1;
  }
</style>
