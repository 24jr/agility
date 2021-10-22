<script>
  import { openModal } from "$lib/components/Auth/store";
  import { isSignedIn } from "$lib/components/Auth/store";

  let hovered = false;
</script>

<div
  class="signinButton"
  class:hovered
  on:pointerenter={() => (hovered = true)}
  on:pointerleave={() => (hovered = false)}
  on:click={openModal}
>
  {#if !$isSignedIn}
    <h4 class="signinText">Sign In</h4>
  {/if}
</div>

<style>
  .signinButton {
    cursor: pointer;
    border-radius: 0.5rem;
    margin: 0 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: baseline;
  }
  .signinButton:hover {
    color: var(--primary);
  }
  .signinText {
    font-weight: 400;
  }
  .hovered {
    box-shadow: 0 0.1rem 0.4rem var(--gray);
  }
</style>
