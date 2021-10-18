<script>
  import CheckX from "$lib/assets/interactive/CheckX/index.svelte";

  export let isPasswordStandardMet = false;
  export let val;

  $: containsLowerLetter = val
    ? val.toUpperCase() != val
    : false;
  $: containsUpperLetter = val
    ? val.toLowerCase() != val
    : false;
  $: containsNumber = val ? /[0-9]/.test(val) : false;
  $: containsSpecialChar = val ? /[!-\/:-@[-`{-~]/.test(val) : false;
  $: passwordLongEnough = val ? val.length > 7 : false;

  $: {
    isPasswordStandardMet =
      containsLowerLetter &&
      containsUpperLetter &&
      containsNumber &&
      containsSpecialChar &&
      passwordLongEnough;
  }

  $: showPasswordTip = val
    ? val.length > 0 && !isPasswordStandardMet
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
