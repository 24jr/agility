<script>
  export let isShown = true;
  export let color = "var(--primary)";
</script>

{#if isShown}
  <svg
    class="errorX"
    style="--color: {color};"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle class="errorXCircle" cx="256" cy="256" r="196.16" />
    <line class="errorX" x1="328.5" y1="183.5" x2="183.5" y2="328.5" />
    <line class="errorX" x2="328.5" y2="328.5" x1="183.5" y1="183.5" />
  </svg>
{/if}

<style>
  .errorX {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    stroke-width: 30;
    stroke: var(--color);
    stroke-miterlimit: 10;
    animation: ease-in-out 0.1s forwards, scale 0.1s ease-in-out 0.1s both;
  }
  .errorXCircle {
    stroke-dasharray: 1250;
    stroke-dashoffset: 1250;
    animation: stroke 0.1s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .errorX {
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
    animation: stroke 0.1s cubic-bezier(0.65, 0, 0.45, 1) 0.1s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
</style>
