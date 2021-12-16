<script>
  import Display from "$lib/components/type/Display/index.svelte";

  export let items;
  export let display_type;
  export let display_settings

  let display_items = []
  $: { filterItems(display_settings)}
  function filterItems(display_settings){
    let filtered_items = items;
    if(display_settings && display_settings.conditions && display_settings.conditions.length > 0){
      for(let condition of display_settings.conditions){
        if (condition.compare === "eq") {
          filtered_items = filtered_items.filter((h) => h[condition.field] === condition.val);
        } else if(condition.compare === "gt"){
          filtered_items = filtered_items.filter((h) => h[condition.field] > condition.val);
        } else if(condition.compare === "ge"){
          filtered_items = filtered_items.filter((h) => h[condition.field] >= condition.val);
        } else if(condition.compare === "lt"){
          filtered_items = filtered_items.filter((h) => h[condition.field] < condition.val);
        } else if(condition.compare === "le"){
          filtered_items = filtered_items.filter((h) => h[condition.field] <= condition.val);
        } else if(condition.compare === "ne"){
          filtered_items = filtered_items.filter((h) => h[condition.field] !== condition.val);
        }
      }
    }
    display_items = filtered_items
  }
</script>


<div class="displayContainer">
  {#each display_items as item, index}
  <div class="container">
    <Display
      val={item}
      {display_type}
      is_list={false}
      {display_settings}
    />
    {#if display_items.length > 1 && index < display_items.length - 1}
      <p class="comma">,</p>
    {/if}
  </div>
{/each}
</div>

<style>
  .displayContainer{
    display: flex;
    flex-wrap: wrap;
  }
  .container {
    display: flex;
    align-items: baseline;
    margin-right: 0.2rem;
  }
  .comma{
    margin-right: .3rem;
  }
</style>
