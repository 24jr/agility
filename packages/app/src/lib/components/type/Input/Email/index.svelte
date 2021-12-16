<script>
  import noSpaces from "$lib/Actions/noSpaces";

  export let val;
  export let isValid = false;
  export let placeholderText = "email";
  export let isDisabled = false;
  $: checkIfValid(val);

  function checkIfValid(val) {
    isValid = val
      ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val.toLowerCase()
        )
      : false;
  }

</script>

<div class="inputContainer">
  <input
    class="indentInput emailField"
    class:isDisabled
    class:error={!isValid && val && val.length > 0 }
    disabled={isDisabled}
    type="email"
    autocomplete="email"
    placeholder={placeholderText}
    maxlength="96"
    bind:value={val}
    use:noSpaces
    on:cleanVal={(e) => (val = e.detail)}
  />
</div>

<style>
  .inputContainer {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .emailField {
    text-transform: lowercase;
  }
  .error{
    box-shadow: inset 0.1rem 0.1rem 0.2rem var(--bg-dark),
		inset -0.1rem -0.1rem 0.2rem var(--bg-light), 0 0 0.1rem 0.1rem var(--red-error);
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
