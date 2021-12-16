<script>
  import XIcon from "$lib/assets/static/icons/X/index.svelte";
  import Dropdown from "$lib/components/type/Input/Dropdown/index.svelte";
  import Text from "$lib/components/type/Input/Text/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let filters;
  export let fields;
  export let isDisabled = false;

  const predicates = [
    { key: "eq", name: "Equal" },
    { key: "ne", name: "Not Equal" },
    { key: "le", name: "Less Than or Equal" },
    { key: "lt", name: "Less Than" },
    { key: "ge", name: "Greater Than or Equal" },
    { key: "gt", name: "Greater Than" },
    { key: "contains", name: "Contains" },
    { key: "notContains", name: "Doesn't Contain" },
    { key: "beginsWith", name: "Begins With" },
    { key: "between", name: "Between" },
  ];

  const baseFilter = { field_key: null, predicate: null, val: null };

  function addFilter() {
    filters.push(JSON.parse(JSON.stringify(baseFilter)));
    filters = filters;
  }

  function deleteFilter(index) {
    if (!isDisabled) {
      filters.splice(index, 1);
      filters = filters;
    }
  }
</script>

{#each filters as filter, index}
  <div class="filterContainer">
    <div class="group">
      <div class="icon" on:click={() => deleteFilter(index)}>
        <XIcon color="var(--contrast-soft)" size=".9" />
      </div>
      <Dropdown bind:val={filter.field_key} options={fields} />
    </div>
    <Dropdown bind:val={filter.predicate} options={predicates} />
    <Text bind:val={filter.val} />
  </div>
{/each}

<Button type="soft" on:click={addFilter}>Add Filter</Button>

<style>
  .filterContainer {
    display: flex;
    justify-content: space-between;
  }
  .group {
    display: flex;
    align-items: center;
  }
</style>
