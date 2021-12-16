<script>
  import { navBarHeight, isAllNavBarHidden } from "../store";
  import AppNavGuts from "./AppNavGuts/index.svelte";
  // import AppFullNav from "./AppFullNav/index.svelte";
  import intersectionObserver from "$lib/actions/intersectionObserver";

  let isAtBottom = true;
</script>

<div
  class="container cardWrapper"
  use:intersectionObserver
  on:loaded={(e) => (isAtBottom = e.detail)}
  on:wheel|preventDefault
  on:touchmove|preventDefault
>
  <div class="fullNav">
    <!-- <AppFullNav />  -->
  </div>
  <div class="navbar" bind:offsetHeight={$navBarHeight}>
    <div class:glasscard={!isAtBottom} class:card={isAtBottom}>
      <AppNavGuts />
    </div>
  </div>
</div>

<style>
  .container {
    position: sticky;
    bottom: -1px;
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
