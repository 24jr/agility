<script>
  import {
    attributesToChange,
    changeAttributes,
    loadingAuthEvent,
    user,
  } from "$lib/components/Auth/store";
  import ErrorDiv from "../ErrorDiv/index.svelte";
  import { TextInput, EmailInput, PhoneNumberInput, Button } from "sveltekit-ui";

  const attributesCleanName = {
    email: "Email",
    phone_number: "Phone Number",
  };

  let attributesToChangeObj = {};

  $: updateObj($attributesToChange);

  function updateObj(attrToChange) {
    let obj = {};
    for (let item of attrToChange) {
      obj[item] = $user.attributes[item] ? $user.attributes[item] : "";
    }
    attributesToChangeObj = obj;
  }

  function handleChangeAttributes() {
    changeAttributes(attributesToChangeObj);
  }

  let isValidEmail;
  let isValidPhoneNumber;

  $: isButtonDisabled =
    ($attributesToChange.some((h) => h === "email") && !isValidEmail) ||
    ($attributesToChange.some((h) => h === "phone_number") &&
      !isValidPhoneNumber);

  $: text =
    $attributesToChange.length > 1
      ? "Attributes"
      : $attributesToChange[0] === "phone_number"
      ? "Phone Number"
      : $attributesToChange[0];
</script>

<form class="form" on:submit|preventDefault={handleChangeAttributes}>
  {#each Object.keys(attributesToChangeObj) as attribute}
    <div class="section">
      {#if attribute === "phone_number"}
        <PhoneNumberInput
          bind:val={attributesToChangeObj[attribute]}
          bind:isValid={isValidPhoneNumber}
        />
      {:else if attribute === "email"}
        <EmailInput
          bind:val={attributesToChangeObj[attribute]}
          bind:isValid={isValidEmail}
        />
      {:else}
        <TextInput bind:val={attributesToChangeObj[attribute]} />
      {/if}
    </div>
  {/each}
  <ErrorDiv />
  <div class="fillSpace" />
  <div class="section">
    <Button
      type="primary"
      isDisabled={$loadingAuthEvent || isButtonDisabled}
      isLoading={$loadingAuthEvent}
      on:click={handleChangeAttributes}
      >{$loadingAuthEvent ? "Loading" : `Change ${text}`}
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
