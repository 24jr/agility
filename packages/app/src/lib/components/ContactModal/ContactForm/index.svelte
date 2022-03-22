<script>
  // import { Button, TextInput, EmailInput, PhoneNumberInput, TextAreaInput, LoadingSuccessDiv  } from "sveltekit-ui"
  import Button from "sveltekit-ui/Button/index.svelte"
  import TextInput from "sveltekit-ui/Input/Text/index.svelte"
  import EmailInput from "sveltekit-ui/Input/Email/index.svelte"
  import PhoneNumberInput from "sveltekit-ui/Input/PhoneNumber/index.svelte"
  import TextAreaInput from "sveltekit-ui/Input/TextArea/index.svelte"
  import LoadingSuccessDiv from "sveltekit-ui/LoadingSuccessDiv/index.svelte"
  import { queryItem, generateMutateParamsAndModel } from "$lib/funcs/gql"

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
	<h3 class="header">Say Hi! Let's see if you're a good fit.</h3>
	<h3 class="label">Message: *</h3>
	<TextAreaInput bind:val={messageVal} placeholder="message" isAlwaysEditable={true} />
	<h3 class="label">Name: *</h3>
	<TextInput bind:val={nameVal} placeholder="name" isAlwaysEditable={true} />
	<h3 class="label">Email: *</h3>
	<EmailInput bind:val={emailVal} placeholder="email" bind:isValid={isValidEmail} />
	<h3 class="label">Phone Number:</h3>
	<PhoneNumberInput
		bind:val={phoneNumberVal}
		isValid={isPhoneNumberValid}
		placeholder="phone number"
	/>
	{#if error}
		<div class="errorContainer">{error}</div>
	{/if}
	<Button
		mt={1}
		pl={1}
		pr={1}
		mr={1}
		minHeight={4}
		type="primary"
		{isDisabled}
		bind:isLoading
		bind:successTrigger
		bind:errorTrigger
		on:click={handleSendMessage}
		isPill={true}
	>
		<h5>Send Message</h5>
	</Button>
{:else}
	<LoadingSuccessDiv showScreen="success" message="We'll reach out to you soon!" />
	<div class="fillSpace" />
	<Button type="primary" on:click={closeModal}>Close</Button>
{/if}

<style>
	.header {
		font-weight: 400;
		font-size: 1.8rem;
		color: var(--black-med);
	}
	.label {
		margin-top: 1rem;
		margin-left: 0.5rem;
		text-align: left;
		font-size: 1.6rem;
		color: var(--contrast-medsoft);
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
