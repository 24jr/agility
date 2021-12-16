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
  <path d="m382 187-12 221c0 19-19 34-42 34H184c-23 0-42-15-42-34l-12-221Z" />
  <path
    d="M417 164v5a18 18 0 0 1-19 18H114a18 18 0 0 1-19-18v-5a42 42 0 0 1 42-42h238a42 42 0 0 1 42 42ZM256 239v149M318 239l-6 149M194 239l7 149M338 111v11H174v-11a42 42 0 0 1 41-41h82a42 42 0 0 1 41 41Z"
  />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
