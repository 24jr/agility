<script>
  import TextDisplay from "$lib/components/type/Display/Text/index.svelte";
  import DateDisplay from "$lib/components/type/Display/Date/index.svelte";
  import ImageDisplay from "$lib/components/type/Display/Image/index.svelte";
  import LinkDisplay from "$lib/components/type/Display/Link/index.svelte";
  import ColorDisplay from "$lib/components/type/Display/Color/index.svelte";
  import EmailDisplay from "$lib/components/type/Display/Email/index.svelte";
  import PhoneNumberDisplay from "$lib/components/type/Display/PhoneNumber/index.svelte";
  // import ModelID from "$lib/components/type/Display/ModelID/index.svelte";
  import Array from "$lib/components/type/Display/Array/index.svelte";

  export let val;
  export let type;
  export let typeSettings;
</script>

{#if val}
  <div class="container">
    {#if type === "date"}
      <DateDisplay bind:val />
    {:else if type === "img"}
      <ImageDisplay bind:val />
    {:else if type === "email"}
      <EmailDisplay bind:val />
    {:else if type === "phonenumber"}
      <PhoneNumberDisplay bind:val />
    {:else if type === "color"}
      <ColorDisplay bind:val />
    {:else if type === "url"}
      <LinkDisplay bind:val />
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
      <TextDisplay bind:val />
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
