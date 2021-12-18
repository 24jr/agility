<script>
	import {
		authPage,
		resetMessages,
		errorMessage,
		errorResolutuionMessage,
		errorResolutuionScreen,
		showErrorMessage
	} from '$lib/components/Auth/store';
	import { XIcon } from 'sveltekit-ui';
	import { fade } from 'svelte/transition';

	function directToPage() {
		authPage.set($errorResolutuionScreen);
		resetMessages();
	}
</script>

{#if $showErrorMessage}
	<div class="errorContainer" transition:fade={{ duration: 100 }}>
		<p>
			{$errorMessage}
			{#if $errorResolutuionMessage && $errorResolutuionMessage.length > 0}
				<span class="clickText" on:click={directToPage}>
					{$errorResolutuionMessage}
				</span>
			{/if}
		</p>
		<div class="icon" on:click={() => showErrorMessage.set(false)}>
			<XIcon color="var(--white-med)" size={1} />
		</div>
	</div>
{/if}

<style>
	.errorContainer {
		background: var(--red-error);
		color: var(--white-med);
		border-radius: 0.5rem;
		margin: 0.5rem;
		padding: 0.5rem 0.9rem 0.5rem 0.7rem;
		text-align: start;
		position: relative;
	}
	.icon {
		position: absolute;
		top: 0;
		right: 0.1rem;
		padding: 0.5rem;
		z-index: 1;
	}
	.clickText {
		text-decoration: underline;
		cursor: pointer;
	}
	.clickText:hover {
		color: #ccf;
	}
</style>
