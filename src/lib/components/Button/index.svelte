<script>
  import LoadingWheel from "$lib/assets/animations/LoadingWheel/index.svelte";
  import SuccessCheck from "$lib/assets/animations/SuccessCheck/index.svelte";
  import ErrorX from "$lib/assets/animations/ErrorX/index.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let minHeight = 3;
  export let ml = 0.2;
  export let mr = 0.2;
  export let mt = 0.2;
  export let mb = 0.2;
  export let px = 0.4;
  export let py = 0.3;
  export let type;
  // export let colorUsed = 'var(--red-error)';
  export let colorTransparentUsed = 'var(--primary-transparent)'
  export let colorUsed = 'var(--primary)';
  export let isLoading = false;
  export let isDisabled = false;
  export let isSelected = false;
  export let isHalfSelected = false;
  export let isCompressed = false;
  export let isCursorMove = false;
  export let successTrigger = 0;
  export let errorTrigger = 0;

  let isSuccess = false;
  let isError = false;

  $: if (successTrigger > 0) {
    handleSuccessTrigger();
  }
  function handleSuccessTrigger() {
    isError = false;
    isSuccess = true;
    if (isLoading) {
      isLoading = false;
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
      setTimeout(() => {
        isSuccess = false;
      }, 1400);
    }
  }

  $: if (errorTrigger > 0) {
    handleErrorTrigger();
  }
  function handleErrorTrigger() {
    isSuccess = false;
    isError = true;
    if (isLoading) {
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
      isLoading = false;
      setTimeout(() => {
        isError = false;
      }, 1400);
    }
  }

  let fallbackTimeout;
  $: if (isLoading) {
    fallbackTimeout = setTimeout(() => {
      isSuccess = false;
      isError = false;
      isLoading = false;
    }, 8000);
  }

  function handleClick(){
    dispatch("click")
  }
</script>

<div style="--ml: {ml}rem; --mr: {mr}rem; --mt: {mt}rem; --mb: {mb}rem;" class="container">
  {#if type === 'color'}
    <button
      class="base colorButton"
      style="--minHeight: {minHeight}rem; --px:{px}rem; --py:{py}rem; --colorUsed: {colorUsed};"
      class:isCompressed
      class:isCursorMove
      class:colorButtonSelected={isSelected}
      disabled={isDisabled || isLoading || isSuccess || isError}
      on:click={handleClick}
      on:pointerenter={() => dispatch("pointerenter")}
      on:pointerleave={() => dispatch("pointerleave")}
    >
      <slot />
      {#if isLoading}
        <div class="load"><LoadingWheel color="var(--gray-dark)" wid=".1" /></div>
      {:else if isSuccess}
        <div class="icon"><SuccessCheck color="var(--gray-dark)" /></div>
      {:else if isError}
        <div class="icon"><ErrorX color="var(--gray-dark)" /></div>
      {/if}
    </button>
    {:else if type === 'outlined'}
    <button
      class="base outlinedButton"
      style="--minHeight: {minHeight}rem; --px:{px}rem; --py:{py}rem; --colorUsed: {colorUsed};"
      class:isCompressed
      class:isCursorMove
      class:outlinedButtonSelected={isSelected}
      disabled={isDisabled || isLoading || isSuccess || isError}
      on:click={handleClick}
      on:pointerenter={() => dispatch("pointerenter")}
      on:pointerleave={() => dispatch("pointerleave")}
    >
      <slot />
      {#if isLoading}
        <div class="load"><LoadingWheel color="var(--gray-dark)" wid=".1" /></div>
      {:else if isSuccess}
        <div class="icon"><SuccessCheck color="var(--gray-dark)" /></div>
      {:else if isError}
        <div class="icon"><ErrorX color="var(--gray-dark)" /></div>
      {/if}
    </button>
{:else if type === 'soft'}
  <button
    class="base softButton"
    style="--minHeight: {minHeight}rem; --px:{px}rem; --py:{py}rem; --colorUsed: {colorUsed}; --colorTransparentUsed: {colorTransparentUsed};"
    class:isCompressed
    class:softButtonSelected={isSelected}
    class:softButtonHalfSelected={isHalfSelected}
    class:isCursorMove
    disabled={isDisabled || isLoading || isSuccess || isError}
    on:click={handleClick}
    on:pointerenter={() => dispatch("pointerenter")}
    on:pointerleave={() => dispatch("pointerleave")}
  >
    <slot />
    {#if isLoading}
      <div class="load"><LoadingWheel color="var(--gray-dark)" wid=".1" /></div>
    {:else if isSuccess}
      <div class="icon"><SuccessCheck color="var(--gray-dark)" /></div>
    {:else if isError}
      <div class="icon"><ErrorX color="var(--gray-dark)" /></div>
    {/if}
  </button>
{:else}
    <button
        class="base standardButton"
        style="--minHeight: {minHeight}rem; --px:{px}rem; --py:{py}rem; --colorUsed: {colorUsed};"
        class:isCompressed
        class:isCursorMove
        disabled={isDisabled || isLoading || isSuccess || isError}
        on:click={handleClick}
        on:pointerenter={() => dispatch("pointerenter")}
        on:pointerleave={() => dispatch("pointerleave")}
      >
        <slot />
      </button>
  {/if}
</div>

<style>
  .container {
    margin-left: var(--ml);
    margin-right: var(--mr);
    margin-top: var(--mt);
    margin-bottom: var(--mb);
  }
  .base {
    position: relative;
    border: none;
    outline: none;
    cursor: pointer;
    min-height: var(--minHeight);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--py) var(--px);
    border-radius: 0.5rem;
    background: var(--bg-med);
    color: var(--contrast-med);
    width: 100%;
  }
  .colorButton{
    background: var(--colorUsed);
    color: var(--white-med);
  }
  .colorButton:hover {
    box-shadow: inset 0 0 500rem var(--tint-soft);
  }
  .colorButtonSelected{
    box-shadow: inset 0 0 500rem var(--tint-strong);
  }
  .colorButton:disabled {
    background: var(--contrast-soft);
    color: var(--white-dark);
  }
  .outlinedButton{
    background: transparent;
    box-sizing: border-box !important;
    border: 1px solid var(--contrast-med);
    color: var(--contrast-med);
  }
  .outlinedButtonSelected {
    background: var(--contrast-med);
    color: var(--bg-med);
  }
  .outlinedButton:hover {
    background: var(--contrast-overlay);
  }
  .outlinedButton:disabled {
    border: 1px solid var(--contrast-soft);
    color: var(--contrast-soft);
  }
  .softButton{
    background: transparent;
    color: var(--contrast-med);
  }
  .softButton:hover {
    background: var(--shadow-soft);
  }
  .softButton:disabled {
    color: var(--contrast-soft);
  }
  .softButtonSelected {
    background: var(--colorUsed) !important;
    color: var(--white-med);
  }
  .softButtonHalfSelected {
    background:var(--colorTransparentUsed) !important;
  }
  .standardButton:hover {
    color: var(--colorUsed);
  }
  .isCompressed {
    width: auto;
  }
  .isCursorMove {
    cursor: move;
  }
  .load {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 1.7rem;
    height: 1.7rem;
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 2rem;
    height: 2rem;
  }
</style>
