<script>
  import Text from "$lib/components/type/Input/Text/index.svelte";
  import Modal from "$lib/components/Modal/index.svelte";
  import Arrow from "$lib/assets/static/icons/Arrow/index.svelte";
  import Button from "$lib/components/Button/index.svelte";
  import { queryItemsPart } from "$lib/funcs/gql";
  import LoadingSuccessDiv from "$lib/components/LoadingSuccessDiv/index.svelte";

  export let val;
  export let isDisabled;
  export let placeholder;
  export let models;

  let items = [];
  let isLoading = false;
  async function handleGetItems(chosenModel) {
    isLoading = true;
    const res = await queryItemsPart(
      chosenModel.schema,
      null,
      chosenModel.queryName
    );
    if (res.message === "success") {
      items = res.data.items;
    }
    isLoading = false;
  }

  let chosenModelIndex = 0;
  $: chosenModel = models[chosenModelIndex];
  $: if (showModal) {
    handleGetItems(chosenModel);
  }

  let showModal;
  $: dir = showModal ? "up" : "down";

  function handleOptionClick(item, toggle) {
    val = item[chosenModel.targetField];
    toggle();
  }
</script>

<div class="container">
  <Text bind:val {placeholder} {isDisabled} />
  <Modal targetWidth={150} type={"dropdown"} bind:isShown={showModal} {isDisabled}>
    <div
      slot="toggleButton"
      class="buttonContainer cardns"
      on:click|preventDefault
    >
      <Button>
        <Arrow size={1} direction={dir} ml=".2" color="var(--contrast-med)" />
      </Button>
    </div>
    <div slot="modalContent" let:toggleModal>
      <div class="dropdownContainer">
        <div on:click|preventDefault>
          {#each models as model, index}
            <Button
              on:click={() => (chosenModelIndex = index)}
              isSelected={chosenModelIndex === index}
            >
              {model.name}
            </Button>
          {/each}
        </div>
        <div class="spacerVert" />
        {#if !isLoading && chosenModel && items}
          {#each items as item}
            <div
              class="optionItem"
              class:selectedItem={item.targetField === val}
              on:click={() => handleOptionClick(item, toggleModal)}
            >
              <p>{item.name}</p>
            </div>
          {/each}
        {:else}
          <LoadingSuccessDiv showScreen="loading" />
        {/if}
      </div>
    </div>
  </Modal>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }
  .buttonContainer {
    /* max-width: minmax(15rem, 100%); */
    display: flex;
    height: 2.7rem;
    max-width: 100%;
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
