<script>
  export let isOpen;

  let hovered = false;
</script>

<button
  class="sideBarToggleButton"
  on:pointerenter={() => (hovered = true)}
  on:pointerleave={() => (hovered = false)}
  class:hovered
  on:click={() => (isOpen = !isOpen)}
>
  <span class="barBase topLine" class:topLineX={isOpen} />
  <span class="barBase midLine" class:midLineX={isOpen} />
  <span class="barBase botLine" class:botLineX={isOpen} />
</button>

<style>
  .sideBarToggleButton {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    pointer-events: initial;
    height: 2.5rem;
    width: 3rem;
    position: relative;
  }
  .hovered .barBase {
    background-position: left;
  }
  .barBase {
    background: linear-gradient(
        to left,
        var(--gray-med) 50%,
        var(--primary) 50%
      )
      right;
    background-size: 200%;
    display: block;
    height: 0.2rem;
    position: absolute;
    width: 2.8rem;
    border-radius: 0.15rem;
    transform: translateY(-50%);
    border: none;
  }
  .topLine {
    top: 10%;
    transition: top 0.2s 0.2s ease-out, transform 0.2s linear,
      background-position 0.6s ease-out;
  }
  .topLineX {
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out,
      background-position 0.6s ease-out;
    top: 50%;
    transform: translateY(-50%) rotate3d(0, 0, 1, -45deg);
  }
  .midLine {
    top: 50%;
    visibility: visible;
    transition: visibility 0s, background-position 0.3s ease-out;
    transition-delay: 0.2s;
  }
  .midLineX {
    visibility: hidden;
    transition: visibility 0s, background-position 0.3s ease-out;
    transition-delay: 0.2s;
  }
  .botLine {
    top: 90%;
    transition: top 0.2s 0.2s ease-out, transform 0.2s linear,
      background-position 0.8s ease-out;
  }
  .botLineX {
    transition: top 0.2s ease-out, transform 0.2s 0.2s ease-out,
      background-position 0.8s ease-out;
    top: 50%;
    transform: translateY(-50%) rotate3d(0, 0, 1, 45deg);
  }
</style>
