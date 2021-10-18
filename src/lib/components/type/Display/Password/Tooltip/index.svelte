<script>
  import CheckX from "$lib/assets/interactive/CheckX/index.svelte";

  export let isPasswordStandardMet = false;
  export let password;

  $: containsLowerLetter = password
    ? password.toUpperCase() != password
    : false;
  $: containsUpperLetter = password
    ? password.toLowerCase() != password
    : false;
  $: containsNumber = password ? /[0-9]/.test(password) : false;
  $: containsSpecialChar = password ? /[!-\/:-@[-`{-~]/.test(password) : false;
  $: passwordLongEnough = password ? password.length > 7 : false;

  $: {
    isPasswordStandardMet =
      containsLowerLetter &&
      containsUpperLetter &&
      containsNumber &&
      containsSpecialChar &&
      passwordLongEnough;
  }

  $: showPasswordTip = password
    ? password.length > 0 && !isPasswordStandardMet
    : false;
</script>

{#if showPasswordTip}
  <div class="passwordGuide">
    <div class="checkContainer">
      <CheckX isCheck={containsLowerLetter} />
      <p class="label">Lowercase Letter</p>
    </div>
    <div class="checkContainer">
      <CheckX isCheck={containsUpperLetter} />
      <p class="label">Uppercase Letter</p>
    </div>
    <div class="checkContainer">
      <CheckX isCheck={containsNumber} />
      <p class="label">Number</p>
    </div>
    <div class="checkContainer">
      <CheckX isCheck={containsSpecialChar} />
      <p class="label">Special Character</p>
    </div>
    <div class="checkContainer">
      <CheckX isCheck={passwordLongEnough} />
      <p class="label">8 characters or more</p>
    </div>
  </div>
{/if}

<style>
  .passwordGuide {
    margin-left: 0.5rem;
  }
  .checkContainer {
    display: flex;
    align-items: center;
  }
  .label {
    margin-left: 0.3rem;
  }
</style>
