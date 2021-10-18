<script>
  export let color = "var(--contrast-med)";
  export let size = 1;
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
  stroke-width="35"
>
  <path d="M114 120v106h109" />
  <rect x="43" y="45" width="422.2" height="422.2" rx="58" />
  <path d="m295 120-1 106h109M114 286v106h109M295 286l-1 106h109" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
