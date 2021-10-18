<script>
  export let color = "var(--contrast-med)";
  export let altColor = "var(--contrast-med)";
  export let size = 1;
  export let isSortedReg;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="--size: {size}rem; --altColor: {altColor}"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="60"
>
  <path class:sorted={isSortedReg} d="M177.53,71.36V431.2l-104-104" />
  <path class:sorted={isSortedReg === false} d="M334.47,431.2V71.36l104,104" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
  .sorted {
    stroke: var(--altColor);
  }
</style>
