<script>
  import { authPage, signInMFACode } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { CodeInput, Button } from "sveltekit-ui";

  let code;
  let isCodeStandardMet;
  $: if (isCodeStandardMet) {
    handleSignInMFACode();
  }

  function handleSignInMFACode() {
    signInMFACode(code);
  }
</script>

<form class="form">
  <div class="section">
    <CodeInput bind:val={code} bind:isValid={isCodeStandardMet} />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button 
      mt="0"
      mb="0"
      py="0"
      on:click={() => authPage.set("signin")}>
      Back to sign in
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
