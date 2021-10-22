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
  import PasswordInput from "$lib/components/type/Input/Password/index.svelte";
  import EmailInput from "$lib/components/type/Input/Email/index.svelte";
  import CodeInput from "$lib/components/type/Input/Code/index.svelte";
  import Button from "$lib/components/Button/index.svelte"

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
    <EmailInput bind:val={$email} bind:isValidEmail />
    <CodeInput bind:val={code} bind:isCodeStandardMet />
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
      type="color"
      isDisabled={$loadingAuthEvent || !isValidEmail || !isCodeStandardMet || !isPasswordStandardMet}
      isLoading={$loadingAuthEvent}
      on:click={handleForgotPasswordReset}
      >{$loadingAuthEvent ? "Loading" : "Update Password"}
    </Button>
    <Button
      type="color"
      isDisabled={$loadingAuthEvent || !isValidEmail}
      isLoading={$loadingAuthEvent}
      on:click={handleSendForgotPasswordReset}
      >{$loadingAuthEvent ? "Loading" : "Resend Confirmation Code"}
    </Button>
    <Button 
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
