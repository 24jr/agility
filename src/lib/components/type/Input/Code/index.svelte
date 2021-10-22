<script>
  import numbersOnly from "$lib/Actions/numbersOnly";

  export let val;
  export let isCodeStandardMet = false;
  export let isDisabled = false;

  $: checkIfCodeStandardMet(val);

  function checkIfCodeStandardMet(code) {
    isCodeStandardMet = code && code.length === 6;
  }
</script>

<div class="container">
  <div class="indentns codeWrapper">
    <input
      class="codeInput"
      class:isDisabled
      disabled={isDisabled}
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      autocomplete="one-time-code"
      bind:value={val}
      maxlength="6"
      use:numbersOnly
      on:cleanVal={(e) => (val = e.detail)}
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .codeWrapper {
    display: flex;
    justify-content: center;
  }
  .codeInput {
    display: flex;
    border: none;
    margin: 0.5ch 0 1rem 1.5rem;
    width: 9ch;
    background: repeating-linear-gradient(
        90deg,
        dimgrey 0,
        dimgrey 1ch,
        transparent 0,
        transparent 1.5ch
      )
      0 100%/ 9ch 2px no-repeat;
    font: 5ch droid sans mono, consolas, monospace;
    letter-spacing: 0.5ch;
  }
  input:focus {
    outline: none;
    color: var(--primary);
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
