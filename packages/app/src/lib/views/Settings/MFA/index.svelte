<script>
  import {
    user,
    setPreferredMFA,
    loadingAuthEvent,
  } from "$lib/components/Auth/store";
  import { Button } from "sveltekit-ui";

  const mfaOptions = [
    { title: "None", code: "NOMFA", type: "NOMFA" },
    { title: "Authenticator App", code: "SOFTWARE_TOKEN_MFA", type: "TOTP" },
    { title: "Text Message", code: "SMS_MFA", type: "SMS" },
  ];
</script>

<div class="grid">
  {#each mfaOptions as option (option.code)}
    <Button
      type="outlined"
      isSelected={$user.preferredMFA === option.code && !$loadingAuthEvent}
      isLoading={$loadingAuthEvent}
      isDisabled={$user.preferredMFA === option.code || $loadingAuthEvent}
      on:click={() => setPreferredMFA(option.type)}
    >
      {option.title}
    </Button>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(14rem, 33%, 100%), 1fr)
    );
  }
</style>
