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
  <path d="M76 89v344h355" />
  <path d="m144 251 35 98 69-164 78 125 89-205" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
