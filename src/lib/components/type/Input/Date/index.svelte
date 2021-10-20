<script>
  import Modal from "$lib/components/Modal/index.svelte";
  import Picker from "./Picker/index.svelte";
  import CalenderIcon from "$lib/assets/static/icons/Calender/index.svelte"

  export let val;
  export let val2
  export let isRange
  export let isDisabled;

  let displayVal = 'mm/dd/yyyy'
  let displayVal2 = 'mm/dd/yyyy'

  function handleDaySelect(){
    console.log('handleDaySelect')
  }

</script>

<Modal minWidth="220" targetWidth="220" minHeight="100" type={"dropdown"}>
  <div slot="toggleButton" class="bump displayContainer">
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
      on:select={handleDaySelect} 
    />
  </div>
</Modal>

<style>
  .displayContainer{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .divider{
    margin: 0 .5rem;
  }
.label{
  display: flex;
  align-items: center;
}
</style>
