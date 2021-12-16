<script>
  import { queryItem, generateMutateParamsAndModel } from "$lib/funcs/gql"
  import TextAreaInput from "$lib/components/type/Input/TextArea/index.svelte"
  import PhoneNumberInput from "$lib/components/type/Input/PhoneNumber/index.svelte"
  import EmailInput from "$lib/components/type/Input/Email/index.svelte"
  import TextInput from "$lib/components/type/Input/Text/index.svelte"
  import Button from "$lib/components/Button/index.svelte"
  import LoadingSuccessDiv from "$lib/components/LoadingSuccessDiv/index.svelte"

  export let toggleModal

  let messageVal = ""
  let nameVal = ""
  let phoneNumberVal = ""
  let emailVal = ""

  let isValidEmail
  let isPhoneNumberValid

  let show_screen = 'default'
  let isLoading = false
  $: isDisabled = isLoading || !messageVal || !nameVal || !emailVal || !isValidEmail

  let error;
  let successTrigger = 0;
  let errorTrigger = 0;

  async function handleSendMessage() {
    isLoading = true
    const query_key = 'createFormSubmission'
    const field_vals = {
      message: messageVal,
      name: nameVal,
      email: emailVal,
      phone_number: isPhoneNumberValid ? phoneNumberVal : null
    }
    const itemModelRes = `{ id }`
    const { params, model } = generateMutateParamsAndModel(field_vals,query_key,itemModelRes)
    isLoading = true;
    const res = await queryItem(model, null, query_key);
    if (res.message === "success") {
      successTrigger = successTrigger + 1;
      setTimeout(() => {
        show_screen = 'success'
      }, 900);
    } else {
      error = JSON.stringify(res.data);
      errorTrigger = errorTrigger + 1;
      show_screen = 'default'
    }
  }

  function closeModal(){
    show_screen = 'default'
    toggleModal()
  }
</script>

{#if show_screen === 'default'}
  <h3>Say Hi! Let's get to know each other.</h3>
  <h3 class="header">Message: *</h3>
  <TextAreaInput bind:val={messageVal} placeholder="message" isAlwaysEditable="true" />
  <h3 class="header">Name: *</h3>
  <TextInput bind:val={nameVal} placeholder="name" isAlwaysEditable="true" />
  <h3 class="header">Email: *</h3>
  <EmailInput bind:val={emailVal} placeholder="email" bind:isValid={isValidEmail} />
  <h3 class="header">Phone Number:</h3>
  <PhoneNumberInput bind:val={phoneNumberVal} isValid={isPhoneNumberValid} placeholder="phone number" />
  {#if error}
    <div class="errorContainer">{error}</div>
  {/if}
  <Button
    type="color"
    {isDisabled}
    bind:isLoading
    bind:successTrigger
    bind:errorTrigger
    on:click={handleSendMessage}
  >
    Send Message
  </Button>
{:else}
  <LoadingSuccessDiv showScreen="success" message="We'll reach out to you soon!" />
  <div class="fillSpace" />
  <Button
    type="color"
    on:click={closeModal}
  >
    Close
  </Button>
{/if}

<style>
  .header{
    margin-top: 1rem;
    margin-left: .5rem;
    text-align: left;
    font-size: 1.2rem;
    color: var(--contrast-medsoft)
  }
  .errorContainer {
    background: var(--red-error);
    color: var(--white-med);
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 0.5rem 0.9rem 0.5rem 0.7rem;
    text-align: start;
    position: relative;
  }
</style>