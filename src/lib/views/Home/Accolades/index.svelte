<script>
  import Cpa from "$lib/assets/static/random/Cpa/index.svelte"
  import Experience from "$lib/assets/static/random/Experience/index.svelte"
</script>

<div class="container">
  <Experience size="14" />
  <Cpa size="14" />
</div>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>