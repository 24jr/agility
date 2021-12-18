<script>
  import {
    setPreferredMFA,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { Button } from "sveltekit-ui";
</script>

<form class="form">
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      on:click={() => setPreferredMFA("NOMFA")}
      >{$loadingAuthEvent ? "Loading" : "Turn off MFA"}
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
</style>