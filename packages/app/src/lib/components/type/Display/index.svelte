<script>
  import TextDisplay from "$lib/components/type/Display/Text/index.svelte";
  import DateDisplay from "$lib/components/type/Display/Date/index.svelte";
  import ImageDisplay from "$lib/components/type/Display/Image/index.svelte";
  import LinkDisplay from "$lib/components/type/Display/Link/index.svelte";
  import LinkInternalDisplay from "$lib/components/type/Display/LinkInternal/index.svelte";
  import ColorDisplay from "$lib/components/type/Display/Color/index.svelte";
  import EmailDisplay from "$lib/components/type/Display/Email/index.svelte";
  import PhoneNumberDisplay from "$lib/components/type/Display/PhoneNumber/index.svelte";
  import ModelDisplay from "$lib/components/type/Display/Model/index.svelte"
  import Array from "$lib/components/type/Display/Array/index.svelte";

  export let val;
  export let is_list;
  export let display_type;
  export let display_settings;
</script>

{#if val}
<div class="container">
  {#if is_list}
    <Array items={val.items} {display_type} {display_settings} />
  {:else}
    {#if display_type === "date"}
      <DateDisplay {val} />
    {:else if display_type === "img_url"}
      <ImageDisplay {val} size={display_settings.size} />
    {:else if display_type === "email"}
      <EmailDisplay {val} />
    {:else if display_type === "phone_number"}
      <PhoneNumberDisplay {val} />
    {:else if display_type === "color"}
      <ColorDisplay {val} is_show_hex={display_settings.is_show_hex} />
    {:else if display_type === "link"}
      <LinkDisplay {val} display_val={display_settings.display_val} />
    {:else if display_type === "link_internal"}
      <LinkInternalDisplay 
        {val} 
        display_val={display_settings.display_val} 
        link_prefix={display_settings.link_prefix} 
        link_suffix={display_settings.link_suffix}
      />
    {:else if display_type === "model"}
      <ModelDisplay {val} {display_settings} />
    {:else}
      <TextDisplay {val} />
    {/if}
  {/if}
</div>
{/if}

<style>
  .container {
    display: flex;
    align-items: center;
  }
</style>
