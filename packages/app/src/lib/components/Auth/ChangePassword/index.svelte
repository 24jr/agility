<script>
  import {
    authPage,
    password,
    changePassword,
    loadingAuthEvent,
    isPasswordShown,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { PasswordInput, Button } from "sveltekit-ui";

  $: isOldPasswordLongEnough = $password && $password.length > 5;

  let newPassword;
  let isPasswordStandardMet;
  let isNewPasswordShown;

  function handleChangePassword() {
    changePassword($password, newPassword);
  }
</script>

<form class="form" on:submit|preventDefault={handleChangePassword}>
  <div class="section">
    <PasswordInput
      bind:val={$password}
      bind:isPasswordLongEnough={isOldPasswordLongEnough}
      bind:isPasswordShown={$isPasswordShown}
      placeholderText={"current password"}
    />
    <PasswordInput
      bind:val={newPassword}
      bind:isPasswordStandardMet
      bind:isPasswordShown={isNewPasswordShown}
      isTooltipUsed={true}
      placeholderText={"new password"}
    />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent ||
        !isOldPasswordLongEnough ||
        !isPasswordStandardMet ||
        $password === newPassword}
      isLoading={$loadingAuthEvent}
      on:click={handleChangePassword}
      >{$loadingAuthEvent ? "Loading" : "Change Password"}
    </Button>
    <Button 
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("signout")}>
      Sign out
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
