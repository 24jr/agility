<script>
  import Modal from "$lib/components/Modal/index.svelte";
  import Arrow from "$lib/assets/static/icons/Arrow/index.svelte";
  import Button from "$lib/components/Button/index.svelte";

  export let val;
  export let options = [];
  export let isMultiselect = false;
  export let isDisabled = false;

  let showModal;

  function handleOptionClick(option, toggleModal) {
    if(isMultiselect){
      if(!val || typeof val !== typeof []){
        val = [option.key]
      } else {
        let index = val.findIndex(h => h === option.key)
        if(index > -1){
          val.splice(index, 1);
          val = val
        } else {
          val = [...val, option.key]
        }
      }
    } else {
      val = option.key;
      showModal = false;
      toggleModal();
    } 
  }

  $: dir = showModal ? "up" : "down";

  let shownValName = "select";
  $: updateShownName(val, options);
  function updateShownName(val, options) {
    if (!isMultiselect && val && options && options.length > 0) {
      const i = options.findIndex((h) => h.key === val);
      shownValName = i > -1 ? options[i].name : "select";
    } else {
      shownValName = "select";
    }
  }
</script>

<Modal targetWidth={150} targetHeight={100} type={"dropdown"} bind:isShown={showModal} {isDisabled}>
  <div slot="toggleButton" class="displayItemContainer" on:click|preventDefault>
    <div class="bumpns">
      <Button {isDisabled}>
        {shownValName}
        <Arrow size={1} direction={dir} ml=".2" color="var(--contrast-med)" />
      </Button>
    </div>
  </div>
  <div slot="modalContent" let:toggleModal>
    <div class="dropdownContainer">
      {#each options as option (option.key)}
        <Button
          type="soft"
          class="optionItem"
          isSelected={option.key === val || (typeof val === typeof [] && val.some(h => h === option.key))}
          on:click={() => handleOptionClick(option, toggleModal)}
        >
        <p>{option.name}</p>
    </Button>
      {/each}
    </div>
  </div>
</Modal>

<style>
  .displayItemContainer {
    display: flex;
    flex: 0;
    margin: .5rem;
  }
  .dropdownContainer {
    max-height: 30rem;
    overflow: scroll;
    text-align: start;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 13rem;
  }
</style>
