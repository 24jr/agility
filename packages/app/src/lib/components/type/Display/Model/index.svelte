<script>
  import Display from "../index.svelte"

  export let val;
  export let display_settings

</script>

<div class="displayItemContainer">
  <div class="displayItem">
    {#if val && display_settings.display_items}
      {#each display_settings.display_items as display_item}
        <Display
          val={val[display_item.val_field]}
          display_type={display_item.display_type}
          is_list={false}
          display_settings={{...display_item, display_val: val[display_item.val_display_field]}}
        />
      {/each}
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
