<script>
  import LoadingWheel from "$lib/assets/animations/LoadingWheel/index.svelte";
  import SuccessCheck from "$lib/assets/animations/SuccessCheck/index.svelte";

  export let message;
  export let showScreen = "loading";
  export let size = 8;
</script>

<div class="successContainer">
  <div class="checkContainer">
    <div class="iconFrame" style="--size: {size}rem;">
      {#if showScreen === "loading"}
        <LoadingWheel />
      {:else if showScreen === "success"}
        <SuccessCheck />
      {/if}
    </div>
  </div>
  {#if message}
    <h3 class="message">{message}</h3>
  {/if}
</div>

<style>
  .successContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 1rem 0;
  }
  .checkContainer {
    display: flex;
    justify-content: center;
  }
  .iconFrame {
    width: var(--size);
    height: var(--size);
  }
  .message {
    margin-top: 2rem;
    font-weight: 500;
  }
</style>
