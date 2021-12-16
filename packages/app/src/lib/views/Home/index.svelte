<script>
  import HeaderBox from "./HeaderBox/index.svelte"
  import Accolades from "./Accolades/index.svelte"
  import ContactForm from "$lib/components/ContactModal/ContactForm/index.svelte"
  import Footer from "./Footer/index.svelte"
</script>

<HeaderBox />
<Accolades />
<div class="card contactWrapper">
  <ContactForm />
</div>
<Footer />

<style>
  .contactWrapper{
    margin: 1rem;
  }
</style>