<script>
  import noSpaces from "$lib/Actions/noSpaces";
  import Tooltip from "./Tooltip/index.svelte";
  import Eye from "$lib/assets/interactive/Eye/index.svelte";
  import { onMount } from "svelte";

  export let val = "";
  export let isPasswordLongEnough = false;
  export let isPasswordStandardMet = false;
  export let isPasswordShown = false;
  export let isTooltipUsed = false;
  export let placeholderText = "password";
  export let isDisabled = false;

  onMount(async () => {
    setIsPasswordShown(isPasswordShown);
  });

  $: {
    isPasswordLongEnough = val && val.length > 7;
  }

  $: setIsPasswordShown(isPasswordShown);
  let passwordEl;
  function setIsPasswordShown(isPswdShown) {
    if (passwordEl) {
      if (isPswdShown) {
        passwordEl.type = "text";
      } else {
        passwordEl.type = "password";
      }
    }
  }
</script>

<div class="passwordContainer">
  <input
    class="indentInput"
    class:isDisabled
    disabled={isDisabled}
    type="password"
    autocomplete="current-password"
    placeholder={placeholderText}
    bind:this={passwordEl}
    bind:value={val}
    maxlength="96"
    use:noSpaces
    on:cleanVal={(e) => (val = e.detail)}
  />
  <div class="eyeIcon">
    <Eye bind:isEyeShown={isPasswordShown}  />
  </div>
</div>
{#if isTooltipUsed && !isDisabled}
  <Tooltip bind:isPasswordStandardMet {val} />
{/if}

<style>
  .passwordContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
  .eyeIcon {
    position: absolute;
    top: 50%;
    right: 1.3rem;
    transform: translateY(-50%);
    user-select: none;
    min-height: 1rem;
    min-width: 1rem;
    z-index: 1;
  }
</style>
