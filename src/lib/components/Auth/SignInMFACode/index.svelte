<script>
  import { authPage, signInMFACode } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import CodeInput from "$lib/components/type/Input/Code/index.svelte";
  import Button from "$lib/components/Button/index.svelte"

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
    <CodeInput bind:val={code} bind:isCodeStandardMet />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button 
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
