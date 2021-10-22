<script>
  import Text from "$lib/components/type/Display/Text/index.svelte";
  import Date from "$lib/components/type/Display/Date/index.svelte";
  import Image from "$lib/components/type/Display/Image/index.svelte";
  import Link from "$lib/components/type/Display/Link/index.svelte";
  // import ModelID from "$lib/components/type/Display/ModelID/index.svelte";
  import Array from "$lib/components/type/Display/Array/index.svelte";

  export let val;
  export let type;
  export let typeSettings;
</script>

{#if val}
  <div class="container">
    {#if type === "date"}
      <Date bind:val />
    {:else if type === "img"}
      <Image bind:val />
    {:else if type === "url"}
      <Link bind:val />
    {:else if type === "modelid"}
      <!-- <ModelID bind:val {typeSettings} /> -->
    {:else if type === "model"}
      <svelte:self
        val={val[typeSettings.singleShownKey]}
        type={typeSettings.legend[typeSettings.singleShownKey].type}
      />
    {:else if type === "modelarray"}
      <Array items={val.items} {typeSettings} />
    {:else}
      <Text bind:val />
    {/if}
    <slot />
  </div>
{/if}

<style>
  .container {
    display: flex;
    align-items: center;
  }
</style>
