<script>
  import noSpaces from "$lib/Actions/noSpaces";

  export let val;
  export let isValid = false
  export let placeholder = "url";
  export let maxLength = 4096;
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
    isValid = isValidWebUrl(val)
    console.log('isValidurl', isValid)
  }

  function handleChange() {
    if (!isDisabled) {
      val = editVal;
      isValid = isValidWebUrl(val)
      console.log('isValidurl', isValid)
      if (val && isValid) {
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

  function isValidWebUrl(url) {
   let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
   return regEx.test(url);
}
</script>

{#if isEditing}
  <div class="inputContainer">
    <input
      class="indentInput"
      class:isDisabled
      type="text"
      {placeholder}
      maxlength={maxLength}
      bind:this={editEl}
      bind:value={editVal}
      on:blur={handleChange}
      use:noSpaces={true}
      on:cleanVal={(e) => editVal = e.detail}
      disabled={isDisabled}
    />
  </div>
{:else if val}
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
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
  .displayItemContainer {
    display: flex;
    flex: 0;
  }
  .displayItem {
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
</style>
