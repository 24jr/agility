<script>
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"
  import InfoPart from "./InfoPart/index.svelte"

  function toggleModal(){}
</script>

<HeaderBox />
<div class="accoladesContainer">
	<Accolades />
</div>
<InfoPart />
<div class="form">
	<ContactForm {toggleModal} />
</div>

<style>
	.accoladesContainer {
		margin: 1rem;
	}
	.form {
		background: white;
		border-radius: 4rem;
		overflow: hidden;
		margin: 2rem;
		padding: 2rem;
		border: 1px solid var(--gray-light);
	}
</style>
