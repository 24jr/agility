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
  stroke-width="75"
>
  <path d="M75 437 437 75M75 75l362 362" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
