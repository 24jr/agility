<script>
  import {
    authPage,
    email,
    password,
    sendForgotPasswordReset,
    forgotPasswordReset,
    loadingAuthEvent,
    isPasswordShown,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { PasswordInput, EmailInput, CodeInput, Button } from "sveltekit-ui";

  let isValidEmail;
  let code;
  let isCodeStandardMet;
  let isPasswordStandardMet;

  function handleForgotPasswordReset() {
    forgotPasswordReset($email, code, $password);
  }

  const handleSendForgotPasswordReset = async () => {
    sendForgotPasswordReset($email);
  };
</script>

<form class="form" on:submit|preventDefault={handleForgotPasswordReset}>
  <div class="section">
    <EmailInput bind:val={$email} bind:isValid={isValidEmail} />
    <CodeInput bind:val={code} bind:isValid={isCodeStandardMet} />
    <PasswordInput
      bind:val={$password}
      bind:isPasswordStandardMet
      bind:isPasswordShown={$isPasswordShown}
      isTooltipUsed={true}
      placeholderText={"new password"}
    />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent || !isValidEmail || !isCodeStandardMet || !isPasswordStandardMet}
      isLoading={$loadingAuthEvent}
      on:click={handleForgotPasswordReset}
      >{$loadingAuthEvent ? "Loading" : "Update Password"}
    </Button>
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent || !isValidEmail}
      isLoading={$loadingAuthEvent}
      on:click={handleSendForgotPasswordReset}
      >{$loadingAuthEvent ? "Loading" : "Resend Confirmation Code"}
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
