<script>
  export let isEyeShown = false;
  export let eyeColor = "var(--contrast-med";
</script>

<div class="iconFrame" on:click={() => (isEyeShown = !isEyeShown)}>
  {#if isEyeShown}
    <svg
      id="eye"
      class="svgCover"
      data-name="eye"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 350"
    >
      <g fill="none" stroke={eyeColor} stroke-width="18">
        <path
          d="M120.2-2.8h58.2a248 248 0 01248 248v58.3a34.6 34.6 0 01-34.6 34.6h-58.2A248 248 0 0185.6 90V31.9a34.6 34.6 0 0134.6-34.7z"
          transform="rotate(-45 256 167.7)"
        />
        <circle cx="256" cy="167.7" r="78.8" />
      </g>
    </svg>
  {:else}
    <svg
      id="eyenot"
      class="svgCover"
      data-name="eyenot"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 350"
    >
      <g fill="none" stroke={eyeColor} stroke-width="18">
        <path
          d="M336.3 292.6a248 248 0 01-255.7-59.3l-41.2-41.1a34.7 34.7 0 010-49L80.6 102a249.1 249.1 0 0135.6-29.6M182.6 139a78.8 78.8 0 00102.2 102M329.4 196.4A78.8 78.8 0 00227.3 94.3"
        />
        <path
          d="M175.7 42.7A248 248 0 01431.4 102l41.2 41.1a34.7 34.7 0 010 49l-41.2 41.2a249 249 0 01-35.6 29.6M115.6 27.3l280.8 280.8"
        />
      </g>
    </svg>
  {/if}
</div>

<style>
  .iconFrame {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
  }
  .svgCover {
    width: 100%;
  }
</style>
