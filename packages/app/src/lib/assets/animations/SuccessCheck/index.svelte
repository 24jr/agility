<script>
  export let isShown = true;
  export let color = "var(--primary)";
</script>

{#if isShown}
  <svg
    class="checkmark"
    style="--color: {color};"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle class="checkmarkCircle" cx="256" cy="256" r="196.16" />
    <path class="checkmarkCheck" d="m162.63 265.42 55.71 56.49 131-131.82" />
  </svg>
{/if}

<style>
  .checkmark {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    stroke-width: 30;
    stroke: var(--color);
    stroke-miterlimit: 10;
    animation: ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
  }
  .checkmarkCircle {
    stroke-dasharray: 1250;
    stroke-dashoffset: 1250;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .checkmarkCheck {
    stroke-dasharray: 270;
    stroke-dashoffset: 270;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
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
