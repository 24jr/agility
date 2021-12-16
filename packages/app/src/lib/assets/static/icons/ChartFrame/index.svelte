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
  stroke-width="35"
>
  <rect x="42" y="154" width="422.2" height="203.6" rx="58" />
  <path d="M53 71h401M53 442h401" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
