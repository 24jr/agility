<script>
  export let color = "var(--contrast-med)";
  export let size = 2;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="--size: {size}rem;"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="40"
>
  <path
    d="M390 251v130a40 40 0 0 1-40 40H134a40 40 0 0 1-40-40V164a40 40 0 0 1 40-40h124"
  />
  <path d="M189 325 429 86H325h104v103" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
