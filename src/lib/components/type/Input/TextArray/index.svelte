<script>
  import Plus from "$lib/assets/static/icons/Plus/index.svelte";
  import X from "$lib/assets/static/icons/X/index.svelte";
  import Button from "$lib/components/Button/index.svelte"
  import noSpaces from "$lib/Actions/noSpaces";

  export let val;
  export let placeholder = "text";
  export let isNoSpaces = false;
  export let maxLength = 255;
  export let isDisabled = false;

  let editVal;
  let editEl

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
        editVal = "";
        setTimeout(() => {
          editEl.focus();
        });
      }
    }
  }

  function deleteListItem(index) {
    if (!isDisabled) {
      val.splice(index, 1);
      val = val;
    }
  }
</script>

<div>
  <div class="inputContainer">
    <input
      bind:this={editEl}
      class="indentInput"
      class:isDisabled
      disabled={isDisabled}
      type="text"
      {placeholder}
      maxlength={maxLength}
      bind:value={editVal}
      use:noSpaces={isNoSpaces}
      on:cleanVal={(e) => handleSpaceClear(e.detail)}
    />
    {#if editVal && editVal.length > 0}
      <div class="plus">
        <Button type="outlined" minHeight="0" {isDisabled} on:click={handleAddVal}>
          <Plus />
        </Button>
      </div>
    {/if}
  </div>
  {#if val && typeof val === typeof []}
    <div>
      {#each val as item, index}
        <div class="bump listItem">
          <div class="displayItem" class:isDisabled>
            <p>{item}</p>
          </div>
          <Button type="outlined" minHeight="0" {isDisabled} on:click={() => deleteListItem(index)}>
            <X />
          </Button>
        </div>
      {/each}
    </div>
  {/if}
</div>

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
    height: 1.5rem;
    width: 1.5rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .displayItem {
    max-width: 100%;
    overflow: scroll;
    word-wrap: break-word;
    text-align: start;
  }
</style>
