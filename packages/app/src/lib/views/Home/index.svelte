<script>
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"
  import InfoPart from "./InfoPart/index.svelte"
  // import { Analytics } from 'aws-amplify';

  function toggleModal(){}
</script>

<HeaderBox />
<Accolades />
<InfoPart />
<div class="form cardshadows">
	<ContactForm {toggleModal} />
</div>

<style>
	.form {
		background: var(--bg-light);
		border-radius: 4rem;
		overflow: hidden;
		margin: 2rem;
		padding: 2rem;
	}
</style>
