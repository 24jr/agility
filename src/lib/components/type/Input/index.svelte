<script>
  import CodeInput from "$lib/components/type/Input/Code/index.svelte";
  import ColorPickerInput from "$lib/components/type/Input/ColorPicker/index.svelte";
  import DateInput from "$lib/components/type/Input/Date/index.svelte";
  import DropdownInput from "$lib/components/type/Input/Dropdown/index.svelte";
  import EmailInput from "$lib/components/type/Input/Email/index.svelte";
  import ImageUrlInput from "$lib/components/type/Input/ImageUrl/index.svelte";
  import IntInput from "$lib/components/type/Input/Int/index.svelte";
  import ModelFiltersInput from "$lib/components/type/Input/ModelFilters/index.svelte";
  import ModelIDInput from "$lib/components/type/Input/ModelID/index.svelte";
  import PasswordInput from "$lib/components/type/Input/Password/index.svelte";
  import PhoneNumberInput from "$lib/components/type/Input/PhoneNumber/index.svelte";
  import SliderInput from "$lib/components/type/Input/Slider/index.svelte";
  import TextInput from "$lib/components/type/Input/Text/index.svelte";
  import TextAreaInput from "$lib/components/type/Input/TextArea/index.svelte";
  import TextArrayInput from "$lib/components/type/Input/TextArray/index.svelte";
  import ToggleInput from "$lib/components/type/Input/Toggle/index.svelte";
  import UrlInput from "$lib/components/type/Input/Url/index.svelte";

  export let val;
  export let input_type;
  export let input_settings;
  export let isDisabled = false;
</script>

{#if input_type}
<div class="container">
  {#if input_type === "code"}
    <CodeInput bind:val {isDisabled} />
  {:else if input_type === "color"}
    <ColorPickerInput bind:val {isDisabled} />
  {:else if input_type === "date"}
    <DateInput bind:val {isDisabled} />
  {:else if input_type === "dropdown"}
    <DropdownInput bind:val {isDisabled} />
  {:else if input_type === "email"}
    <EmailInput bind:val {isDisabled} />
  {:else if input_type === "img_url"}
    <ImageUrlInput bind:val {isDisabled} />
  {:else if input_type === "int"}
    <IntInput bind:val {isDisabled} />
  {:else if input_type === "model_filters"}
    <ModelFiltersInput bind:val {isDisabled} />
  {:else if input_type === "model_id"}
    <ModelIDInput bind:val {isDisabled} />
  {:else if input_type === "password"}
    <PasswordInput bind:val {isDisabled} />
  {:else if input_type === "phone_numbrer"}
    <PhoneNumberInput bind:val {isDisabled} />
  {:else if input_type === "slider"}
    <SliderInput bind:val {isDisabled} />
  {:else if input_type === "text_area"}
    <TextAreaInput bind:val {isDisabled} />
  {:else if input_type === "text_array"}
    <TextArrayInput bind:val {isDisabled} />
  {:else if input_type === "toggle"}
    <ToggleInput bind:val {isDisabled} />
  {:else if input_type === "url"}
    <UrlInput bind:val {isDisabled} />
  {:else}
    <TextInput bind:val {isDisabled} />
  {/if}
</div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
</style>
