<script>
  import Modal from "$lib/components/Modal/index.svelte";
  import Picker from "./Picker/index.svelte";
  import { formatDate } from "$lib/funcs/general"
  import CalenderIcon from "$lib/assets/static/icons/Calender/index.svelte"

  export let val;
  export let val2
  export let isRange
  export let isDisabled;

  let displayVal = 'mm/dd/yyyy'
  let displayVal2 = 'mm/dd/yyyy'

  $: if(val){ updateDisplayVal(val) }
  function updateDisplayVal(val){
    displayVal = formatDate(JSON.parse(val));
  }

  $: if(val2){ updateDisplayVal2(val2) }
  function updateDisplayVal2(val2){
    displayVal2 = formatDate(JSON.parse(val2));
  }

</script>

<Modal minWidth="220" targetWidth="220" minHeight="100" type={"dropdown"}>
  <div slot="toggleButton" class="bump inputContainer">
    <div class="label">
      {displayVal} <CalenderIcon ml=".5" />
    </div>
    {#if isRange}
    <p class="divider">&#8211</p>
    <div class="label">
      {displayVal2} <CalenderIcon ml=".5" />
    </div>
  {/if}
  </div>
  <div slot="modalContent" let:toggleModal>
    <Picker 
      bind:val 
      bind:val2 
      bind:isDisabled 
      {isRange}
      bind:displayVal
      bind:displayVal2 
    />
  </div>
</Modal>

<style>
  .inputContainer {
    display: flex;
    flex-direction: column;
    flex: 0;
    cursor: pointer;
  }
  .divider{
    margin: 0 .5rem;
  }
.label{
  display: flex;
  align-items: center;
}
</style>
