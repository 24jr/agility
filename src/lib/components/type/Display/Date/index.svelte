<script>
  import { formatDate } from "$lib/funcs/general";

  export let val;
</script>

<div class="displayItem">
  <p>{formatDate(val)}</p>
</div>

<style>
  .displayItem {
    max-width: minmax(15rem, 100%);
    overflow: scroll;
    text-align: start;
  }
</style>
