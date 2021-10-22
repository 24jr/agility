<script>
  import Link from "$lib/assets/static/icons/Link/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let val;

  function callNumber(number) {
    Object.assign(document.createElement('a'), {
      href: 'tel:'+number,
    }).click();
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{val}</p>
    <Button type="soft" on:click={() => callNumber(val)} px=".2">
      <Link size="1.5" />
    </Button>
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
