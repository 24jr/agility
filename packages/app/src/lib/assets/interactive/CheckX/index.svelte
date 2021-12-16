<script>
  export let isCheck = false;
</script>

<div class="iconFrame">
  {#if isCheck}
    <svg
      id="check"
      class="svgCover"
      data-name="check"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="var(--primary)"
        stroke-width="75"
        d="M432.4 116.9L177.5 371.7l-104-104"
      />
    </svg>
  {:else}
    <svg
      id="x"
      class="svgCover"
      data-name="x"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="var(--gray-light)"
        stroke-width="75"
        d="M75 437L437 75M75 75l362 362"
      />
    </svg>
  {/if}
</div>

<style>
  .iconFrame {
    width: 1.1rem;
    height: 1.1rem;
    display: flex;
    align-items: center;
  }
  .svgCover {
    width: 100%;
  }
</style>
