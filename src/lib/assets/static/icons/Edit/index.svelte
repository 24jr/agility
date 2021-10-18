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
  stroke-width="40"
>
  <path
    d="M390.4 251.4v129.1a40 40 0 01-40 40H133.6a40 40 0 01-40-40V164a40 40 0 0140-40h124.6"
  />
  <path
    d="M188.6 305l18.3-37.7a10.8 10.8 0 012.1-3l170-170c5-5 14-4.3 20 1.7l19.4 19.4c6 6 6.7 14.9 1.7 20l-170 170a10.8 10.8 0 01-3 2.1l-37.7 18.3c-11.9 5.7-26.6-9-20.8-20.8z"
  />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
