<script>
  import Button from "$lib/components/Button/index.svelte"
  import LinkIcon from "$lib/assets/static/icons/Link/index.svelte"
  import CopyIcon from "$lib/assets/static/icons/Copy/index.svelte"

  export let val;
  
  let isValid = false;

  $: checkIfValid(val);

  function checkIfValid(val) {
    isValid = val
      ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val.toLowerCase()
        )
      : false;
  }

  function mailto(){
    window.open('mailto:'+val, '_self');
  }

  function copyToClipboard(){
    navigator.clipboard.writeText(val);
  }
</script>

<div class="container">
  <p class="emailField">{val}</p>
  <Button type="soft" on:click={copyToClipboard} mr="0" px=".2">
    <CopyIcon size="1.7" />
  </Button>
  {#if isValid}
  <Button type="soft" on:click={mailto} ml="0" px=".2">
    <LinkIcon size="1.7" />
  </Button>
  {/if}
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }
  .emailField {
    text-transform: lowercase;
  }
</style>
