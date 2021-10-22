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
  <rect x="85.2" y="144" width="258.1" height="297.4" rx="12" />
  <path
    d="M146.7 212.2h135M146.7 292.7h135M146.7 373.3h135M426.8 82.5V356a12 12 0 01-12 12h-71.5V156a12 12 0 00-12-12H168.7V82.5a12 12 0 0112-12h234.1a12 12 0 0112 12z"
  />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
