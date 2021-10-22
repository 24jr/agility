<script>
  import SimpleColorPalette from "./SimpleColorPallete/index.svelte";
  import FullColorPalette from "./FullColorPallete/index.svelte";
  import TransparentBG from "./TransparentBG/index.svelte";
  import OpacitySlider from "./OpacitySlider/index.svelte";
  import Modal from "$lib/components/Modal/index.svelte"
  
  export let hex = "#ff0000"
  export let opacity = .5

  let showFull = false
</script>

{#if hex && !isNaN(opacity)}
<Modal minWidth="225" minHeight="100" type={"dropdown"}>
  <div slot="toggleButton" class="bump displayContainer">
    <div class="colorDisplay">
      <TransparentBG />
      <div class="colorOverlay" style="background: {hex}; opacity: {opacity}"></div>
    </div>
  </div>
  <div slot="modalContent" let:toggleModal>
    <div>
      <SimpleColorPalette bind:showFull bind:hex />
      <FullColorPalette bind:showFull bind:hex />
      <OpacitySlider class="opacity" bind:hex bind:opacity />
    </div>
  </div>
</Modal>
{/if}

<style>
  .colorDisplay {
    height: 30px;
    width: 30px;
    border-radius: .5rem;
    overflow: hidden;
    display: flex;
    position: relative;
  }
  .colorOverlay{
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
  