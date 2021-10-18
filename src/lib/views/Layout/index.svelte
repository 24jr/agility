<script>
  import NavBar from "./NavBar/index.svelte";
  import AppNavBar from "./AppNavBar/index.svelte";
  // import AuthModal from "./AuthModal/index.svelte";
  import { screenWidth, screenHeight, isApp, isAllNavBarHidden, isDarkTheme, setIsDarkTheme } from "./store";
  import { onMount } from "svelte";

  let mounted = false;
  onMount(() => (mounted = true));
  $: if (mounted) {
    setIsDarkTheme($isDarkTheme);
  }
</script>

<svelte:window
  bind:innerWidth={$screenWidth}
  bind:innerHeight={$screenHeight}
/>

<div class="container">
  {#if !$isApp}
    <NavBar />
  {/if}
  <div class="fillScreen">
    <slot />
  </div>
  {#if $isApp}
    <AppNavBar />
  {/if}
  <!-- <AuthModal /> -->
</div>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .fillScreen {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
