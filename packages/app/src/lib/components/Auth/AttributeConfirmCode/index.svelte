<script>
  import {
    user,
    attributeToConfirmType,
    resendAttributeVerificationCode,
    attributeConfirmCode,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { CodeInput, Button } from "sveltekit-ui";

  let code;
  let isCodeStandardMet;

  $: if (isCodeStandardMet) {
    handleAttributeConfirmCode();
  }

  function handleAttributeConfirmCode() {
    attributeConfirmCode($attributeToConfirmType, code);
  }
</script>

<form class="form">
  <div class="section">
    <p class="attrLabel">{$user.attributes[$attributeToConfirmType]}</p>
    <CodeInput bind:val={code} bind:isValid={isCodeStandardMet} />
  </div>
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      on:click={() => resendAttributeVerificationCode($attributeToConfirmType)}
      >{$loadingAuthEvent ? "Loading" : "Resend Code"}
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
  .attrLabel {
    margin: 1rem 0;
  }
</style>
