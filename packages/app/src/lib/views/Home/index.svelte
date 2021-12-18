<script>
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"
  import Footer from "./Footer/index.svelte"

  function toggleModal(){}
</script>

<HeaderBox />
<Accolades />
<div class="card contactWrapper">
  <ContactForm {toggleModal} />
</div>
<Footer />

<style>
  .contactWrapper{
    margin: 1rem;
  }
</style>