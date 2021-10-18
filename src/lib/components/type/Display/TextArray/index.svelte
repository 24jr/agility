<script>
  import Plus from "$lib/assets/static/icons/Plus/index.svelte";
  import X from "$lib/assets/static/icons/X/index.svelte";
  import noSpaces from "$lib/Actions/noSpaces";

  export let placeholder = "text";
  export let isArray = false;
  export let isNoSpaces = false;
  export let maxLength = 255;
  export let val;
  export let isDisabled = false;

  let isEditing = !val;
  let editVal;

  let unset = true;
  $: if (unset) {
    valChange(val);
  }
  function valChange(val) {
    unset = false;
    editVal = val;
  }

  $: editValChange(editVal);
  function editValChange(editVal) {
    val = editVal;
  }

  function handleChange() {
    if (!isDisabled) {
      val = editVal;
      if (val && val.length > 0) {
        isEditing = false;
      }
    }
  }

  function handleSpaceClear(newVal) {
    if (isNoSpaces) {
      editVal = newVal;
    }
  }

  function handleAddVal() {
    if (!isDisabled) {
      if (editVal) {
        if (!val || typeof val !== typeof []) {
          val = [editVal];
        } else {
          val.push(editVal);
          val = val;
        }
      }
      editVal = "";
      isEditing = true;
    }
  }

  function deleteListItem(index) {
    if (!isDisabled) {
      val.splice(index, 1);
      val = val;
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

{#if !isArray && isEditing}
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
      use:noSpaces={isNoSpaces}
      on:cleanVal={(e) => handleSpaceClear(e.detail)}
      disabled={isDisabled}
    />
  </div>
{:else if !isArray && !isEditing}
  <div class="displayItemContainer">
    <div class="card displayItem" class:isDisabled on:click={editText}>
      <p>{val}</p>
    </div>
  </div>
{:else}
  <div>
    <div class="inputContainer">
      <input
        class="indentInput"
        class:isDisabled
        disabled={isDisabled}
        type="text"
        {placeholder}
        maxlength={maxLength}
        bind:value={editVal}
        on:blur={handleAddVal}
        use:noSpaces={isNoSpaces}
        on:cleanVal={(e) => handleSpaceClear(e.detail)}
      />
      {#if editVal && editVal.length > 0}
        <div class="plus" on:click={handleAddVal}>
          <Plus />
        </div>
      {/if}
    </div>
    {#if val && typeof val === typeof []}
      <div>
        {#each val as item, index}
          <div class="listItem">
            <div class="card displayItem" class:isDisabled>
              <p>{item}</p>
            </div>
            <div class="icon" on:click={() => deleteListItem(index)}>
              <X color="var(--contrast-soft)" size=".9" />
            </div>
          </div>
        {/each}
      </div>
    {/if}
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
  .plus {
    position: absolute;
    top: 50%;
    right: 1.3rem;
    transform: translateY(-50%);
    user-select: none;
    height: 1.8rem;
    width: 1.8rem;
    z-index: 2;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 1px solid var(--contrast-med);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .plus:hover {
    box-shadow: inset 0 0 5rem var(--bg-highlight);
  }
  .listItem {
    position: relative;
  }
  .icon {
    position: absolute;
    right: 0.5rem;
    top: 0;
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    background: var(--bg-med);
    box-shadow: 0 0 0.5rem var(--shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon:hover {
    box-shadow: inset 0 0 5rem var(--bg-highlight);
  }
  .displayItemContainer {
    display: flex;
    flex: 0;
  }
  .displayItem {
    /* max-width: minmax(15rem, 100%); */
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
</style>
