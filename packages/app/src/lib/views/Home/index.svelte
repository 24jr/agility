<script>
  import LogoLong from "$lib/assets/static/LogoLong/index.svelte"
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"
  import InfoPart from "./InfoPart/index.svelte"
  import { isApp } from "$lib/store"

  function toggleModal(){}
</script>

{#if $isApp}
	<div class="logolongBox cardshadows">
		<div style="width: 24rem;">
			<LogoLong />
		</div>
	</div>
{/if}
<HeaderBox />
<Accolades />
<InfoPart />
<div class="form cardshadows">
	<ContactForm {toggleModal} />
</div>

<style>
	.logolongBox {
		background: var(--bg-light);
		border-radius: 4rem;
		margin: 2rem;
		padding: 2rem 1rem 1.5rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.form {
		background: var(--bg-light);
		border-radius: 4rem;
		overflow: hidden;
		margin: 2rem;
		padding: 2rem;
	}
</style>
