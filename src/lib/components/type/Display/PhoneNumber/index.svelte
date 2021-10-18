<script>
  import numbersOnly from "$lib/Actions/numbersOnly";

  export let val;
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{val}</p>
  </div>
</div>

<style>
  .displayItemContainer {
    display: flex;
    /* flex: 0; */
  }
  .displayItem {
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
</style>
