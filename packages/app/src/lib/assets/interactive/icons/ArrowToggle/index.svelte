<script>
  export let direction = "up";
  export let isOpen = false;
  export let colorone = "var(--gray-med)";

  const map = { left: 270, right: 90, down: 180 };
  $: rDeg = map[direction] ? map[direction] : 0;

  function toggleArrow() {
    isOpen = !isOpen;
  }

  let hovered = false;
</script>

<button
  class="sideBarToggleButton"
  style="--rDeg: {rDeg}deg; --colorone: {colorone};"
  on:pointerenter={() => (hovered = true)}
  on:pointerleave={() => (hovered = false)}
  class:hovered
  on:click={toggleArrow}
>
  <div class="arrowContainer">
    <span class="barBase" class:leftLine={isOpen} class:leftLineOpp={!isOpen} />
    <span
      class="barBase rightLine"
      class:rightLine={isOpen}
      class:rightLineOpp={!isOpen}
    />
  </div>
</button>

<style>
  .sideBarToggleButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    pointer-events: initial;
    width: 1.2rem;
    transform: rotate(var(--rDeg));
  }
  .arrowContainer {
    position: relative;
    height: 1rem;
  }
  .hovered .barBase {
    background-position: left;
  }
  .barBase {
    background: linear-gradient(
        to left,
        var(--colorone) 50%,
        var(--primary) 50%
      )
      right;
    background-size: 200%;
    background-position: left;
    position: absolute;
    width: 0.8rem;
    border-radius: 0.1rem;
    transition: 0.4s ease;
    height: 0.2rem;
    transform-origin: center right;
    transform: rotate(0);
    left: 0;
  }
  .leftLine {
    top: 0;
    transform-origin: center right;
    transform: translateX(0.05rem) rotate(-45deg);
  }
  .leftLineOpp {
    top: calc(100% - 0.1rem);
    background-position: right;
    transform: translateX(0.05rem) rotate(45deg);
  }
  .rightLine {
    top: 0;
    transform: translateX(-0.05rem) rotate(225deg);
  }
  .rightLineOpp {
    top: calc(100% - 0.1rem);
    background-position: right;
    transform: translateX(-0.05rem) rotate(135deg);
  }
</style>
