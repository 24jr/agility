<script context="module">
  import Modal from "$lib/components/Modal/index.svelte";
  import Logo from "$lib/assets/static/Logo/index.svelte";
  import ContactForm from "./ContactForm/index.svelte";
  import {
    openContactModalTrigger,
    closeContactModalTrigger,
  } from "./store";
</script>

<Modal
  minWidth={280}
  targetWidth={450}
  minHeight={280}
  type={"center"}
  closeModalWatch={$closeContactModalTrigger}
  openModalWatch={$openContactModalTrigger}
>
  <div class="modalContainer" slot="modalContent" let:toggleModal>
    <div id="logoAndText">
      <div id="logo">
        <Logo />
      </div>
    </div>
    <ContactForm {toggleModal} />
  </div>
</Modal>

<style>
  .modalContainer{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #logoAndText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  #logo {
    width: 14rem;
  }
</style>
