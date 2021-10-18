<script context="module">
  import Modal from "$lib/components/Modal/index.svelte";
  import AuthFlow from "$lib/components/AuthFlow/index.svelte";
  import Logo from "$lib/assets/static/Logo/index.svelte";
  import {
    closeModalTrigger,
    openModalTrigger,
  } from "$lib/components/AuthFlow/store";
</script>

<Modal
  targetWidth={380}
  type={"center"}
  closeModalWatch={$closeModalTrigger}
  openModalWatch={$openModalTrigger}
>
  <div slot="modalContent" let:toggleModal>
    <div class="authContainer">
      <div id="logoAndText">
        <div id="logo">
          <Logo />
        </div>
      </div>
      <AuthFlow />
    </div>
  </div>
</Modal>

<style>
  .authContainer {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    height: 33rem;
    margin: auto;
  }
  #logoAndText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  #logo {
    height: 3.5rem;
    width: 9rem;
  }
</style>
