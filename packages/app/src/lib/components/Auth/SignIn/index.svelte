<script>
	import {
		authPage,
		email,
		password,
		isPasswordShown,
		signIn,
		loadingAuthEvent
	} from '$lib/components/Auth/store';
	import { PasswordInput, EmailInput, Button } from 'sveltekit-ui';
	import ErrorDiv from '../ErrorDiv/index.svelte';

	// let rememberMe = false
	let isValidEmail;
	let isPasswordLongEnough;
	let submitable = false;
	$: submitable = isValidEmail && isPasswordLongEnough;

	const handleSignIn = async () => {
		signIn($email, $password);
	};
</script>

<form class="form" on:submit|preventDefault={handleSignIn}>
	<div class="section">
		<EmailInput bind:val={$email} bind:isValid={isValidEmail} />
		<PasswordInput
			bind:val={$password}
			bind:isPasswordLongEnough
			bind:isPasswordShown={$isPasswordShown}
		/>
		<p class="subText forgot" on:click={() => authPage.set('forgotpassword')}>Forgot password?</p>
		<!-- <div class="rememberCheckbox">
      <Checkbox isChecked={rememberMe} label={'Remember me?'} />
    </div> -->
	</div>
	<ErrorDiv />
	<div class="fillSpace" />
	<div class="section">
		<Button
			type="primary"
			isDisabled={$loadingAuthEvent || !submitable}
			isLoading={$loadingAuthEvent}
			on:click={handleSignIn}
			>{$loadingAuthEvent ? 'Loading' : 'Sign In'}
		</Button>
		<Button mt={0} mb={0} py={0} on:click={() => authPage.set('signup')} text="Sign Up" />
	</div>
</form>

<style>
	.form {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.section {
		display: flex;
		flex-direction: column;
	}
	.subText {
		font-size: 1.2rem;
		color: var(--primary);
		cursor: pointer;
	}
	.forgot {
		text-align: start;
		margin-left: 1rem;
	}
	/* .rememberCheckbox{
    margin-left: 1rem;
    margin-top: 1rem;
  } */
</style>
