<script>
  import Logo from "$lib/assets/static/Logo/index.svelte";
  import { goto } from "$app/navigation";
  import { isFullNavToggledOn, linkClicks } from "$lib/views/Layout/store";
  // import Hamburger from "$lib/assets/interactive/Hamburger/index.svelte";
  // import NavLinks from "./NavLinks/index.svelte";
  import ContactButton from "../../ContactButton/index.svelte"

  let navBarWidth;
  let logoWidth;
  let navLinksWidth;
  let navHamburgerWidth;

  $: isRoomForLinks =
    navBarWidth && logoWidth && navLinksWidth && navHamburgerWidth
      ? navBarWidth - logoWidth - navLinksWidth - navHamburgerWidth > 0
      : true;

  function toHome() {
    goto("/");
    linkClicks.update((n) => n + 1);
  }

  $: if ($linkClicks) {
    setTimeout(() => {
      isFullNavToggledOn.set(false);
    }, 10);
  }
</script>

<div class="container" bind:offsetWidth={navBarWidth}>
  <div class="logo" on:click={toHome} bind:offsetWidth={logoWidth}>
    <Logo />
  </div>
  <!-- {#if isRoomForLinks}
    <div class="navLinks" bind:offsetWidth={navLinksWidth}>
      <NavLinks />
    </div>
  {/if}
  <div class="navHamburger" bind:offsetWidth={navHamburgerWidth}>
    <Hamburger bind:isOpen={$isFullNavToggledOn} />
  </div> -->
  <ContactButton />
</div>

<style>
  .container {
    display: flex;
    overflow: scroll;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    display: flex;
    align-self: center;
    flex: 0;
    padding: 0.1rem;
    min-height: 3rem;
    min-width: 12rem;
  }
  /* .navHamburger {
    display: flex;
    align-self: center;
    padding: 0.3rem;
    height: 3rem;
    min-width: 4rem;
  } */
</style>
