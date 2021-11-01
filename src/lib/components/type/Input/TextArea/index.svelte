<script>
  export let val;
  export let placeholder = "text";
  export let maxLength = 900;
  export let isDisabled = false;
  export let isAlwaysEditable = false
  export let rows = 5

  let isEditing = isAlwaysEditable ? true : !val;
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
    if (!isDisabled) {
      val = editVal;
      if (val && val.length > 0 && !isAlwaysEditable) {
        isEditing = false;
      } else {
        isEditing = true;
      }
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

{#if isEditing && !isDisabled}
  <div class="inputContainer">
    <textarea
      class="indentInput textarea"
      class:isDisabled
      disabled={isDisabled}
      type="text"
      {placeholder}
      maxlength={maxLength}
      {rows}
      bind:this={editEl}
      bind:value={editVal}
      on:blur={handleChange}
    />
  </div>
{:else if val}
  <div class="bump displayItem" class:isDisabled on:click={editText}>
    <p>{val}</p>
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
