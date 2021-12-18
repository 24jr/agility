<script>
  import {
    authPage,
    email,
    sendForgotPasswordReset,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { EmailInput, Button } from "sveltekit-ui";

  const handleSendForgotPasswordReset = async () => {
    sendForgotPasswordReset($email);
  };

  let isValidEmail;
</script>

<form class="form" on:submit|preventDefault={handleSendForgotPasswordReset}>
  <div class="section">
    <EmailInput bind:val={$email} bind:isValid={isValidEmail} />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent || !isValidEmail}
      isLoading={$loadingAuthEvent}
      on:click={handleSendForgotPasswordReset}
      >{$loadingAuthEvent ? "Loading" : "Send Password Reset"}
    </Button>
    <Button
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("signin")}>
      Sign In
    </Button>
  </div>
</form>

<style>
  .form {
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
