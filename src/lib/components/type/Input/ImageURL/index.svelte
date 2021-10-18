<script>
  import UrlInput from "$lib/components/type/Input/Url/index.svelte";

  export let val;
  export let placeholder = "url";
  export let isDisabled = false;
  export let imgSize = '32'
  export let isValid = false

  let isUrlValid = false

  $: checkImageUrl(val, isUrlValid)
  async function checkImageUrl(url, isUrlValid){
    if(url && isUrlValid){
      const res = await fetch(url);
      const buff = await res.blob();
      isValid = buff.type.startsWith('image/')
    }
  }
  
</script>
<UrlInput bind:val {isDisabled} {placeholder} bind:isValid={isUrlValid} />
{#if val && isValid}
  <div class="img">
    <img class:isDisabled src={val} height={imgSize} width={imgSize} alt="logo" />
  </div>
{/if}

<style>
  .img {
    display: flex;
    align-items: left;
    margin: 0.5rem;
  }
  .isDisabled {
    filter: grayscale(100%) opacity(40%);
  }
</style>
