<script>
  import TransparentBG from "../../Input/ColorPicker/TransparentBG/index.svelte";
  
  export let hex = "#ff0000"
  export let opacity = .5

</script>

{#if hex && !isNaN(opacity)}
  <div class="colorDisplay">
    <TransparentBG />
    <div class="colorOverlay" style="background: {hex}; opacity: {opacity}"></div>
  </div>
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
  