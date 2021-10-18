<script>
  export let isShown;
  export let size = 2;
</script>

<div
  class="buttonBox"
  style="--size: {size}rem; --sizeOuter: {size + 0.4}rem;"
  on:click={() => (isShown = false)}
>
  <button class="sideBarToggleButton">
    <span class="barBase topLineX" />
    <span class="barBase botLineX" />
  </button>
</div>

<style>
  .buttonBox {
    width: var(--sizeOuter);
    height: var(--sizeOuter);
    border-radius: 50%;
    overflow: hidden;
    padding: 0.2rem;
    cursor: pointer;
  }
  .sideBarToggleButton {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    pointer-events: initial;
    width: var(--size);
    height: var(--size);
  }
  .sideBarToggleButton:hover .barBase {
    background-position: left;
  }
  .barBase {
    background: linear-gradient(
        to left,
        var(--contrast-med) 50%,
        var(--primary) 50%
      )
      right;
    background-size: 200%;
    display: block;
    height: 0.2rem;
    position: absolute;
    width: var(--size);
    border-radius: 0.15rem;
    transform: translateY(-50%);
  }
  .topLineX {
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out,
      background-position 0.3s ease-out;
    top: 50%;
    transform: translateY(-50%) rotate3d(0, 0, 1, -45deg);
  }
  .botLineX {
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out,
      background-position 0.5s ease-out;
    top: 50%;
    transform: translateY(-50%) rotate3d(0, 0, 1, 45deg);
  }
</style>
