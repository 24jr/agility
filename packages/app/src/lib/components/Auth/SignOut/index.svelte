<script>
  import {
    signOut,
    authPage,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { Button } from "sveltekit-ui";
</script>

<div class="container">
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      on:click={signOut}
      >{$loadingAuthEvent ? "Loading" : "Sign Out"}
    </Button>
    <Button
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("changepassword")}>
      Change Password
    </Button>
    <Button 
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("changeemail")}>
      Change Email
    </Button>
    <Button 
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("mfatotp")}>
      Manage MFA TOTP
    </Button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
</style>
