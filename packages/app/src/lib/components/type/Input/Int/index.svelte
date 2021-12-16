<script>
  export let min = 1;
  export let max = 99;
  export let val;
  export let placeholder = "number";
  export let isDisabled = false;

  let isEditing = !val;
  let editVal;

  $: valChange(val);
  function valChange(val) {
    editVal = val;
    handleChange();
  }

  $: editValChange(editVal);
  function editValChange(editVal) {
    val = editVal;
  }

  function handleChange() {
    val = editVal > max ? max : editVal < min ? min : editVal;
    if (!isNaN(val) && JSON.stringify(val).length > 0) {
      isEditing = false;
    } else {
      isEditing = true;
    }
  }

  let editEl;
  function editText() {
    if (!isDisabled) {
      isEditing = true;
      setTimeout(() => {
        editEl.focus();
      });
    }
  }
</script>

{#if isEditing || !val}
  <div class="inputContainer">
    <input
      class="indentInput textarea"
      class:isDisabled
      disabled={isDisabled}
      {placeholder}
      type="number"
      name="quantity"
      {min}
      {max}
      bind:this={editEl}
      bind:value={editVal}
      on:blur={handleChange}
    />
  </div>
{:else}
  <div class="displayItemContainer">
    <div class="bump displayItem" class:isDisabled on:click={editText}>
      <p>{val}</p>
    </div>
  </div>
{/if}

<style>
  .inputContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .textarea {
    font-family: "Lato", "Avenir Next", "Helvetica", "Hiragino Sans", "Verdana",
      "PT Sans", "Helvetica Neue";
  }
  .displayItemContainer {
    display: flex;
    flex: 0;
  }
  .displayItem {
    max-width: minmax(15rem, 100%);
    max-height: 30rem;
    overflow: scroll;
    text-align: start;
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
</style>
