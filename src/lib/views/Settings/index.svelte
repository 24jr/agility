<script>
  import { isDarkTheme } from "$lib/views/Layout/store";
  import ToggleInput from "$lib/components/type/Input/Toggle/index.svelte";
  import Button from "$lib/components/Button/index.svelte";
  import LabeledItem from "$lib/components/LabeledItem/index.svelte";
  import EditIcon from "$lib/assets/static/icons/Edit/index.svelte";
  import TrashcanIcon from "$lib/assets/static/icons/Trashcan/index.svelte";
  import {
    user,
    isSignedIn,
    signOut,
    loadingAuthEvent,
    showChangeAttributesScreen,
    showConfirmAttributesScreen,
    removeAttribute,
  } from "$lib/components/Auth/store";
  import MFA from "./MFA/index.svelte";
</script>

<h2 class="header">Settings</h2>
<div class="grid">
  {#if $isSignedIn && $user}
    <div class="dataSection">
      <LabeledItem label="Email">
        <div class="item">
          {$user.attributes.email}
          <Button 
            type="soft"
            ml=".5"
            mr="0"
            px="0.2"
            on:click={() => showChangeAttributesScreen(["email"])}>
            <EditIcon size="1.5" />
          </Button>
        </div>
        {#if $user.attributes.email && !$user.attributes.email_verified}
          <div class="warning">
            Email not verified. <span
              on:click={() => showConfirmAttributesScreen("email")}
              class="errorAction">verify email</span
            >
          </div>
        {/if}
      </LabeledItem>
      <LabeledItem label="Phone Number">
        <div class="item">
          {$user.attributes.phone_number}
          <div class="icons">
            <Button
              type="soft"
              ml=".5"
              mr="0"
              px="0.2"
              on:click={() => showChangeAttributesScreen(["phone_number"])}
            >
              <EditIcon size="1.5" />
            </Button>
            <Button type="soft" ml="0" mr="0" px="0.2" on:click={() => removeAttribute("phone_number")}>
              <TrashcanIcon size="1.5" />
            </Button>
          </div>
        </div>
        {#if $user.attributes.phone_number && !$user.attributes.phone_number_verified}
          <div class="warning">
            Phone not verified. <span
              on:click={() => showConfirmAttributesScreen("phone_number")}
              class="errorAction">verify phone number</span
            >
          </div>
        {/if}
      </LabeledItem>
      <LabeledItem label="Sub">
        <div class="item">
          {$user.attributes.sub}
        </div>
      </LabeledItem>
      <LabeledItem label="Multi-Factor Auth">
        <MFA />
      </LabeledItem>
    </div>
  {/if}
  <div class="dataSection">
    <LabeledItem label="Dark Theme">
      <ToggleInput bind:val={$isDarkTheme} type="toggle" />
    </LabeledItem>
    <LabeledItem label="Language" isDisabled="true">
      <div class="item">
        <p style="color: var(--contrast-soft)">coming soon</p>
      </div>
    </LabeledItem>
    <LabeledItem label="Support" isDisabled="true">
      <div class="item">
        <p style="color: var(--contrast-soft)">coming soon</p>
      </div>
    </LabeledItem>
    {#if $isSignedIn && $user}
      <Button 
        type="outlined"
        isDisabled={$loadingAuthEvent} 
        on:click={signOut}
      >
        Sign Out
      </Button>
      <Button 
        type="outlined"
        isDisabled={$loadingAuthEvent} 
        on:click={() => signOut(true)}
      >Sign Out All Devices
      </Button>
    {/if}
  </div>
</div>

<style>
  .header {
    text-decoration: underline;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(20%, 40rem, 100%), 1fr)
    );
  }
  .dataSection {
    /* max-width: clamp(50rem, 50%, 100%); */
    margin: 0.5rem;
  }
  .warning {
    background: var(--errorRed);
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: var(--white-med);
    text-align: start;
  }
  .errorAction {
    text-decoration: underline;
    cursor: pointer;
  }
  .icons {
    display: flex;
    align-items: center;
  }
  .item {
    display: flex;
    align-items: center;
  }
</style>
