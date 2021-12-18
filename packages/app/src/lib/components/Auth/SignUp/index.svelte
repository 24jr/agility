<script>
  import {
    authPage,
    email,
    password,
    isPasswordShown,
    signUp,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import { PasswordInput, EmailInput, Button } from "sveltekit-ui";
  import ErrorDiv from "../ErrorDiv/index.svelte";

  let isValidEmail;
  let isPasswordStandardMet;

  $: submitable = isValidEmail && isPasswordStandardMet;

  const handleSignUp = async () => {
    signUp($email, $password);
  };
</script>

<form class="form" on:submit|preventDefault={handleSignUp}>
  <div class="section">
    <EmailInput bind:val={$email} bind:isValid={isValidEmail} />
    <PasswordInput
      bind:val={$password}
      bind:isPasswordStandardMet
      bind:isPasswordShown={$isPasswordShown}
      isTooltipUsed={true}
    />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent || !submitable}
      isLoading={$loadingAuthEvent}
      on:click={handleSignUp}
      >{$loadingAuthEvent ? "Loading" : "Sign Up"}
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
