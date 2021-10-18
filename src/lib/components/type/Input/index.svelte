<script>
  import TextInput from "$lib/components/type/Input/Text/index.svelte";
  import TextAreaInput from "$lib/components/type/Input/TextArea/index.svelte";
  import DateInput from "$lib/components/type/Input/Date/index.svelte";
  import ImageUrlInput from "$lib/components/type/Input/ImageUrl/index.svelte";
  import DropdownInput from "$lib/components/type/Input/Dropdown/index.svelte";
  import ModelIDInput from "$lib/components/type/Input/ModelID/index.svelte";
  import IntInput from "$lib/components/type/Input/Int/index.svelte";
  import ToggleInput from "$lib/components/type/Input/Toggle/index.svelte";

  // import EmailInput from "$lib/components/inputs/Email.svelte";
  // import CodeInput from "$lib/components/inputs/Code.svelte";
  // import PasswordInput from "$lib/components/inputs/Password/index.svelte";
  // import PhoneNumberInput from "$lib/components/inputs/PhoneNumber/index.svelte";

  export let val;
  export let type;
  export let typeSettings;
  export let isDisabled = false;
</script>

{#if type === "text" || type === "url"}
  <TextInput
    bind:val
    placeholder={typeSettings.placeholder}
    isNoSpaces={typeSettings.isNoSpaces}
    {isDisabled}
  />
{:else if type === "textarea"}
  <TextAreaInput bind:val placeholder={typeSettings.placeholder} {isDisabled} />
{:else if type === "date"}
  <DateInput bind:val {isDisabled} />
{:else if type === "toggle"}
  <ToggleInput bind:val {isDisabled} />
{:else if type === "img"}
  <ImageUrlInput bind:val placeholder={typeSettings.placeholder} {isDisabled} />
{:else if type === "dropdown"}
  <DropdownInput bind:val {isDisabled} options={typeSettings.dropdownOptions} />
{:else if type === "int"}
  <IntInput
    bind:val
    {isDisabled}
    placeholder={typeSettings.placeholder}
    min={typeSettings.min}
    max={typeSettings.max}
  />
{:else if type === "modelid"}
  <ModelIDInput
    bind:val
    {isDisabled}
    placeholder={typeSettings.placeholder}
    models={typeSettings.models}
  />
{/if}
