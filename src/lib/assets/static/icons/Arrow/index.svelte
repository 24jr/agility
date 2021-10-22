<script>
  export let direction = "up";
  export let color = "var(--contrast-med)";
  export let size = 2;
  export let ml = 0;
  export let mr = 0;
  const map = { left: 270, right: 90, down: 180 };
  $: deg = map[direction] ? map[direction] : 0;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="transform: rotate({deg}deg); --size: {size}rem; margin-left: {ml}rem; margin-right: {mr}rem;"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="75"
>
  <path d="m62 337 194-194 194 194" />
</svg>

<style>
  .icon {
    width: var(--size);
    height: var(--size);
  }
</style>
