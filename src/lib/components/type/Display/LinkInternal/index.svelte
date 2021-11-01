<script>
  import LinkInternalIcon from "$lib/assets/static/icons/LinkInternal/index.svelte";
  import Button from "$lib/components/Button/index.svelte";
  import { goto } from "$app/navigation";

  export let val;
  export let display_val;
  export let link_prefix;
  export let link_suffix;

  function openInternalLink() {
    goto(link_prefix+val+link_suffix)
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{display_val ? display_val : val}</p>
    <Button type="soft" on:click={openInternalLink} px=".2" minHeight="0">
      <LinkInternalIcon size="1.5" />
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
