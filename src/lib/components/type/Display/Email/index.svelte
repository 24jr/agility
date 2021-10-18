<script>
  import noSpaces from "$lib/Actions/noSpaces";

  export let email;
  export let isValidEmail = false;
  export let placeholderText = "email";
  export let isDisabled = false;
  $: checkIfValid(email);

  function checkIfValid(email) {
    isValidEmail = email
      ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email.toLowerCase()
        )
      : false;
  }
</script>

<div class="inputContainer">
  <input
    class="indentInput emailField"
    class:isDisabled
    disabled={isDisabled}
    type="email"
    autocomplete="email"
    placeholder={placeholderText}
    maxlength="96"
    bind:value={email}
    use:noSpaces
    on:cleanVal={(e) => (email = e.detail)}
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
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
