<script>
  export let color = "var(--contrast-med)";
  export let size = 1;
  export let mr = 0;
  export let ml = 0;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="--size: {size}rem; margin-left: {ml}rem; margin-right: {mr}rem;"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="30"
>
  <rect x="70" y="86" width="372.3" height="339.5" rx="47.9" />
  <path d="M442 175H70M442 289H70M256 175v251" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
