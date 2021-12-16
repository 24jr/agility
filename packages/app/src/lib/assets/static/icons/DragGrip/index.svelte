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
  stroke-width="96"
>
  <path d="M97 97h0M97 415h0M415 97h0M415 415h0" />
  <path d="M256 97h0" />
  <path d="M256 415h0M415 256h0M97 256h0" />
  <path d="M256 256h0" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
