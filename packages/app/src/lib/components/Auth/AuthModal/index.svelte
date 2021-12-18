<script context="module">
  import { Modal } from "sveltekit-ui";
  import Auth from "$lib/components/Auth/index.svelte";
  import Logo from "$lib/assets/static/Logo/index.svelte";
  import {
    closeModalTrigger,
    openModalTrigger,
  } from "$lib/components/Auth/store";
</script>

<Modal
  minWidth={280}
  targetWidth={400}
  minHeight={280}
  targetHeight={350}
  type={"center"}
  closeModalWatch={$closeModalTrigger}
  openModalWatch={$openModalTrigger}
>
  <div class="modalContainer" slot="modalContent" let:toggleModal>
    <div id="logoAndText">
      <div id="logo">
        <Logo />
      </div>
    </div>
    <Auth />
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
