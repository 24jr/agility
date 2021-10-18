<script>
  export let color = "var(--contrast-med)";
  export let size = 2.4;
  export let ml = 0
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  class="icon"
  style="--size: {size}rem; --ml: {ml}rem"
  stroke-linecap="round"
  stroke-linejoin="round"
  fill="none"
  stroke={color}
  stroke-width="25"
>
  <rect x="69.83" y="106.26" width="372.34" height="328.85" rx="47.86"/>
  <path d="M442.17 184.48H69.83"/>
  <path d="M217.82 135.64V76.88M141.45 135.64V76.88M294.18 135.64V76.88M370.55 135.64V76.88"/>
  <g fill="black">
  <rect x="362.8" y="237.28" width="15.5" height="15.5" rx="4.29"/>
  <rect x="286.43" y="237.28" width="15.5" height="15.5" rx="4.29"/>
  <rect x="211.66" y="237.28" width="15.5" height="15.5" rx="4.29"/>
  <rect x="286.43" y="299.93" width="15.5" height="15.5" rx="4.29"/>
  <rect x="133.7" y="363.92" width="15.5" height="15.5" rx="4.29"/>
  <rect x="211.66" y="363.92" width="15.5" height="15.5" rx="4.29"/>
  <rect x="133.7" y="299.93" width="15.5" height="15.5" rx="4.29"/>
  <rect x="211.66" y="299.93" width="15.5" height="15.5" rx="4.29"/>
  <rect x="362.8" y="299.93" width="15.5" height="15.5" rx="4.29"/>
  <rect x="286.43" y="363.92" width="15.5" height="15.5" rx="4.29"/>
</g>
</svg>


<style>
  .icon {
    width: var(--size);
    height: var(--size);
    margin-left: var(--ml);
  }
</style>
