<script>
  import LinkIcon from "$lib/assets/static/icons/Link/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let val;
  export let display_val;

  function openInNewTab(url) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: url,
    }).click();
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{display_val ? display_val : val}</p>
    <Button type="soft" on:click={() => openInNewTab(val)} px=".2" minHeight="0">
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
