<script>
  const minSquareWidth = 10
  const maxSquareWidth = 25
  const minSquaresPerRow = 2

  let elWidth
  let elHeight

  let squareCount = 0
  let squaresPerRow = 0
  let squaresPerCol = 0
  let squareWidth = 0

  $: { calcNums(elWidth, elHeight) }

  function calcNums(width, height){
    const shorterLen = width < height ? width : height
    let squareWid = shorterLen * .3
    if(squareWid < minSquareWidth){ squareWid = minSquareWidth }
    if(squareWid > maxSquareWidth){ squareWid = maxSquareWidth }
    let squaresPerShorterLen = Math.floor(shorterLen / squareWid)+1
    if(squaresPerShorterLen < minSquaresPerRow){ squaresPerShorterLen = minSquaresPerRow}
    squareWid = shorterLen / squaresPerShorterLen
    if(width < height){
      squaresPerRow = squaresPerShorterLen
      squaresPerCol = Math.floor(height / squareWid)+1
    } else {
      squaresPerCol = squaresPerShorterLen
      squaresPerRow = Math.floor(width / squareWid)+1
    }
    squareWidth = squareWid
    squareCount = squaresPerRow * squaresPerCol
  }
  
  function isDarkSquare(n,x){
    let isDark = n%2 
    let isOffsetRow = Math.floor(n/x)%2 == 1
    if(isOffsetRow && x%2 === 0){
      isDark = !isDark
    }
    return isDark
  }
</script>

<div class="areaContainer" >
  <div 
    bind:clientWidth={elWidth}
    bind:clientHeight={elHeight}
    class="checkerboardContainer" 
    style="
    display: grid;
    grid-template-columns: repeat({squaresPerRow}, {squareWidth}px);
    grid-template-rows: repeat({squaresPerCol}, {squareWidth}px);"
  >
    {#each {length: squareCount} as _, n}
      <div class="square lightSquare" class:darkSquare={isDarkSquare(n,squaresPerRow)}></div>
    {/each}
  </div>
</div>

<style>
  .areaContainer{
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
  }
  .checkerboardContainer{
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
  .square {
    display: flex;
  }
  .lightSquare {
    background-color: #ccc;
  }
  .darkSquare {
    background-color: #888;
  }
</style>
  