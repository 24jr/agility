<script>
  import Link from "$lib/assets/static/icons/Link/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let val;

  function toLink(link) {
    window.open(link, "_blank");
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{val}</p>
    <div on:click|stopPropagation|preventDefault>
      <Button on:click={() => toLink(val)} px=".1" py=".1" mx=".2" my="0">
        <Link size="1.5" />
      </Button>
    </div>
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
