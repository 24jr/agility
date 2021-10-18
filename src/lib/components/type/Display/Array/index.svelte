<script>
  import Display from "$lib/components/type/Display/index.svelte";

  export let items;
  export let typeSettings;

  let displayItems = [];
  $: itemsChanged(items);
  function itemsChanged(items) {
    let filteredItems = items;
    if (typeSettings.conditions) {
      for (let condition of typeSettings.conditions) {
        if (condition.compare === "eq") {
          filteredItems = filteredItems.filter(
            (h) => h[condition.field] === condition.val
          );
        }
      }
    }
    displayItems = filteredItems;
  }
</script>

{#each displayItems as item, index}
  <div class="container">
    <Display
      val={item[typeSettings.singleShownKey]}
      type={typeSettings.legend[typeSettings.singleShownKey].type}
    />
    {#if displayItems.length > 1 && index < displayItems.length - 1}
      <p>,</p>
    {/if}
  </div>
{/each}

<style>
  .container {
    display: flex;
    margin-right: 0.2rem;
  }
</style>
