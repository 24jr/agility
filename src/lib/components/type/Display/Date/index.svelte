<script>
  import { formatDate } from "$lib/funcs/general";

  export let val;
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{formatDate(val)}</p>
  </div>
</div>

<style>
  .displayItemContainer {
    display: flex;
    flex: 0;
  }
  .displayItem {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
</style>