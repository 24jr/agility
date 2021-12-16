<script>
  export let val;
  export let min = 1;
  export let max = 2;
  export let step = 0.01;
  export let fontSize = 1
  export let isDisabled = false;
  export let highlightColor = "var(--primary)";

  let editVal;

  $: valChange(val);
  function valChange(val) {
    editVal = val ? val : 1 > min && 1 < max ? 1 : min;
    handleChange();
  }

  $: editValChange(editVal);
  function editValChange(editVal) {
    setBubble();
    val = editVal;
  }

  function handleChange() {
    val = editVal > max ? max : editVal < min ? min : editVal;
  }

  let editEl;
  let bubbleEl;
  $: {
    bubbleEl, setBubble();
  }

  let sliderHighlightBGWid = 50;
  let sliderWid;
  function setBubble() {
    const newVal = Number(((editVal - min) * 100) / (max - min));
    const shortVal = editVal.toString().replace("0.", ".");
    if (bubbleEl) {
      bubbleEl.innerHTML = shortVal;
      bubbleEl.style.left = `calc(${newVal}% + (${12 - newVal * 0.24}px))`;
    }
    const ratioFilled = (editVal - min) / (max - min);
    sliderHighlightBGWid = 2.4 * (1 - ratioFilled) + (sliderWid / 10) * ratioFilled;
  }
</script>

<div class="sliderBox indentns" bind:clientWidth={sliderWid}>
  <div
    class="sliderHighlightBG"
    class:sliderHighlightBGDisabled={isDisabled}
    style="--wid: {sliderHighlightBGWid}rem; --highlightColor: {highlightColor}"
  />
  <div bind:this={bubbleEl} class="bubble" class:bubbleDisabled={isDisabled} style="--fontSize: {fontSize}rem" />
  <input
    bind:this={editEl}
    bind:value={editVal}
    on:blur={handleChange}
    class="slider"
    disabled={isDisabled}
    type="range"
    {min}
    {max}
    {step}
  />
</div>

<style>
  .sliderBox {
    margin: 0.5rem 0;
    width: 100%;
    height: 2.4rem;
    position: relative;
    display: flex;
    border-radius: 2rem;
  }
  .sliderHighlightBG {
    position: absolute;
    display: flex;
    width: var(--wid);
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;
    background: var(--highlightColor);
    box-shadow: inset 0.1rem 0.1rem 0.2rem var(--tint), inset -0.1rem -0.1rem 0.2rem var(--shadow);
  }
  .sliderHighlightBGDisabled {
    background: var(--gray-med);
  }
  .slider {
    -webkit-appearance: none;
    position: absolute;
    display: flex;
    width: 100%;
    margin: 0;
    background: none;
    outline: none;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 2rem;
    width: 2rem;
    margin-top: 0.2rem;
    cursor: pointer;
  }
  .slider::-webkit-slider-thumb:hover {
    height: 2rem;
    width: 2rem;
    margin-top: 0.2rem;
  }
  .bubble {
    position: absolute;
    height: 2rem;
    width: 2rem;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: var(--fontSize);
    transform: translateX(-50%);
    cursor: pointer;
    color: var(--black-med);
    background: linear-gradient(-45deg, var(--white-light), var(--white-dark));
    box-shadow: 0.1rem 0.1rem 0.2rem var(--shadow), -0.1rem -0.1rem 0.2rem var(--tint);
  }
  .bubbleDisabled {
    color: var(--gray-med);
  }
</style>
