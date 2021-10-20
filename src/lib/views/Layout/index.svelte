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

<svelte:window bind:innerHeight={$screenHeight}/>

<div class="container" bind:clientWidth={$screenWidth}>
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
    /* overflow: scroll; */
  }
  .fillScreen {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
