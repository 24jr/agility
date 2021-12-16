<script>
  export let color = "var(--contrast-med)";
  export let size = 2;
  export let ml = 0;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="--size: {size}rem; margin-left: {ml}rem"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="75"
>
  <path d="M256 62v388M62 256h388" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
