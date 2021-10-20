<script>
  import Plus from "$lib/assets/static/icons/Plus/index.svelte";
  
  export let hex
  export let showFull

  const stdColorRanges = [
    [ '#ffab40', '#ff6d00', '#ff0000', '#d50000' ], // red
    [ '#e949ff', '#aa00ff', '#7c4dff', '#6200ea' ], // purple
    [ '#18ffff', '#00b0ff', '#2979ff', '#304ffe' ], // blue
    [ '#76ff23', '#00da86', '#00b053', '#008036' ], // green
    [ '#ffff00', '#FFD700', '#b88860', '#804f39' ], // gold
    [ '#ffffff','#6879b7', '#000000', '+' ], // black
  ]
</script>

{#if !showFull}
  <div class="colorGridContainer">
    {#each stdColorRanges as range, rangeIndex (rangeIndex)}
      <div class="colorHodler">
        {#each range as color, colorIndex (colorIndex)}
          {#if color == '+'}
            <div on:click={() => showFull = true} class="colorItem">
              <Plus />
            </div>
          {:else}
            <div on:click={() => hex = color} class="colorItem" style="background: {color};"></div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
{/if}

<style>
  .colorGridContainer {
    display: flex;
  }
  .colorHodler {
    display: flex;
    flex-direction: column;
  }
  .colorItem {
    height: 2rem;
    width: 2rem;
    border-radius: .5rem;
    margin: .3rem;
    box-shadow:0 .1rem .1rem rgba(25,25,25,.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .colorItem:hover {
    height: 2.2rem;
    width: 2.2rem;
    margin: 0.2rem;
    box-shadow:0 .1rem .5rem rgba(0,0,0,.5)
  }
  </style>
  