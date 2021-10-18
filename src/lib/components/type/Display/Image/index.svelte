<script>
  export let val;
  export let size = 28;
  export let ma = 0;
</script>

{#if val}
  <div class="img" style="--ma: {ma}rem;">
    <img src={val} height={size} width={size} alt="logo" />
  </div>
{/if}

<style>
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--ma);
  }
</style>
