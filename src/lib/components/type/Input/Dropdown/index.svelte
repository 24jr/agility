<script>
  import Modal from "$lib/components/Modal/index.svelte";
  import Arrow from "$lib/assets/static/icons/Arrow/index.svelte";
  import ButtonBasic from "$lib/components/ButtonBasic/index.svelte";

  export let options = [];
  export let val;
  export let isDisabled = false;

  let showModal;

  if (!val && options && options.length > 0) {
    val = options[0].key;
  }

  function handleOptionClick(option, toggleModal) {
    val = option.key;
    showModal = false;
    toggleModal();
  }

  $: dir = showModal ? "up" : "down";

  let shownValName = "select";
  $: updateShownName(val, options);
  function updateShownName(val, options) {
    if (val && options && options.length > 0) {
      const i = options.findIndex((h) => h.key === val);
      shownValName = i > -1 ? options[i].name : "select";
    } else {
      shownValName = "select";
    }
  }
</script>

<Modal targetWidth={150} targetHeight={100} type={"dropdown"} bind:showModal {isDisabled}>
  <div slot="toggleButton" class="displayItemContainer" on:click|preventDefault>
    <div class="displayItem cardns">
      <ButtonBasic {isDisabled}>
        {shownValName}
        <Arrow size={1} direction={dir} ml=".2" color="var(--contrast-med)" />
      </ButtonBasic>
    </div>
  </div>
  <div slot="modalContent" let:toggleModal>
    <div class="dropdownContainer">
      {#each options as option (option.key)}
        <div
          class="optionItem"
          class:selectedItem={option.key === val}
          on:click={() => handleOptionClick(option, toggleModal)}
        >
          <p>{option.name}</p>
        </div>
      {/each}
    </div>
  </div>
</Modal>

<style>
  .displayItemContainer {
    display: flex;
    flex: 0;
    margin: 0.5rem;
  }
  .displayItem {
    /* max-width: minmax(15rem, 100%); */
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
  .dropdownContainer {
    max-height: 30rem;
    overflow: scroll;
    text-align: start;
  }
  .optionItem {
    display: flex;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .optionItem:hover {
    background: var(--bg-highlight);
  }
  .selectedItem {
    color: var(--primary);
  }
</style>
