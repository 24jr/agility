<script>
  import {
    authPage,
    email,
    resendSignUpConfirmationCode,
    signUpConfirmCode,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { CodeInput, Button } from "sveltekit-ui";

  let code;
  let isCodeStandardMet;
  $: if (isCodeStandardMet) {
    handleSignUpConfirmCode();
  }

  function handleSignUpConfirmCode() {
    signUpConfirmCode($email, code);
  }

  const handleResendSignUpConfirmationCode = () => {
    resendSignUpConfirmationCode($email);
  };
</script>

<form class="form">
  <div class="section">
    <p class="emailLabel">{$email}: code: {code}</p>
    <CodeInput bind:val={code} bind:isValid={isCodeStandardMet} />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      on:click={handleResendSignUpConfirmationCode}
      >{$loadingAuthEvent ? "Loading" : "Send Confirmation Code"}
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
  .emailLabel {
    margin: 1rem 0;
  }
</style>
