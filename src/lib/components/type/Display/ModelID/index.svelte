<script>
  import InternalLink from "$lib/assets/static/icons/InternalLink/index.svelte";
  import Button from "$lib/components/Button/index.svelte";
  import { goto } from "$app/navigation";

  export let val;
  export let typeSettings;
  let path;
  $: if (typeSettings.models.length == 1) {
    path = typeSettings.models[0].pathPrefix + val;
  }
</script>

<div class="displayItemContainer">
  <div class="displayItem">
    <p>{val}</p>
    {#if path}
      <div on:click|stopPropagation|preventDefault>
        <Button on:click={() => goto(path)} px=".1" py=".1" mx=".2" my="0">
          <InternalLink size="1.5" />
        </Button>
      </div>
    {/if}
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
