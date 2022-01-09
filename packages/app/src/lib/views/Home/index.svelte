<script>
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"

  function toggleModal(){}
</script>

<HeaderBox />
<Accolades />
<div class="card contactWrapper">
  <ContactForm {toggleModal} />
</div>

<style>
  .contactWrapper{
    margin: 1rem;
  }
</style>