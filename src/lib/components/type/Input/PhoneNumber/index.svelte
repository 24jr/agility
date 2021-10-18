<script>
  import numbersOnly from "$lib/Actions/numbersOnly";
  import CountryCodeField from "./CountryCodeField/index.svelte";

  export let phoneNumber;
  export let isValid = false;
  export let placeholderText = "phone number";
  export let isDisabled = false;

  let countryCode;
  let mainPhoneNum = "";

  $: combineVals(countryCode, mainPhoneNum);

  function combineVals(country, phoneNum) {
    phoneNumber = country + phoneNum;
    isValid = country === "+1" ? phoneNum.length > 9 : phoneNum.length > 3;
  }
</script>

<div class="phoneContainer">
  <CountryCodeField bind:countryCode {isDisabled} />
  <input
    class="indentInput phoneField"
    class:isDisabled
    disabled={isDisabled}
    type="tel"
    autocomplete="tel-national"
    pattern="[0-9]*"
    placeholder={placeholderText}
    bind:value={mainPhoneNum}
    maxlength="10"
    use:numbersOnly
    on:cleanVal={(e) => (mainPhoneNum = e.detail)}
  />
</div>

<style>
  .phoneContainer {
    display: flex;
  }
  .phoneField {
    display: flex;
    flex: 1;
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
