<script>
  import LinkIcon from "$lib/assets/static/icons/Link/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let val;

  function openInNewTab(url) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: url,
    }).click();
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{val}</p>
    <Button type="soft" on:click={() => openInNewTab(val)} px=".2">
      <LinkIcon size="1.5" />
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
