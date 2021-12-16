<script>
  import TransparentBG from "../TransparentBG/index.svelte";

  export let hex;
  export let opacity;
  export let min = 0;
  export let max = 1;
  export let step = 0.01;
  export let fontSize = 1
  export let isDisabled = false;

  let editVal;

  $: valChange(opacity);
  function valChange(val) {
    editVal = val ? val : 1 > min && 1 < max ? 1 : min;
    handleChange();
  }

  $: editValChange(editVal);
  function editValChange(editVal) {
    setBubble();
    opacity = editVal;
  }

  function handleChange() {
    opacity = editVal > max ? max : editVal < min ? min : editVal;
  }

  let editEl;
  let bubbleEl;
  $: {
    bubbleEl, setBubble();
  }

  function setBubble() {
    const newVal = Number(((editVal - min) * 100) / (max - min));
    const shortVal = editVal.toString().replace("0.", ".");
    if (bubbleEl) {
      bubbleEl.innerHTML = shortVal;
      bubbleEl.style.left = `calc(${newVal}% + (${10 - newVal * 0.2}px))`;
    }
  }
</script>

<div class="sliderBox indentns">
  <div class="opacityBG">
    <TransparentBG />
    <div class="opcityColorBlur" style="background-image: linear-gradient(90deg, transparent, {hex});"></div>
  </div>
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
    height: 2rem;
    position: relative;
    display: flex;
    border-radius: 2rem;
  }
  .opacityBG{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    overflow: hidden;
  }
  .opcityColorBlur {
    position: absolute;
    width: 100%;
    height: 100%;
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
    height: 1.8rem;
    width: 1.8rem;
    margin-top: 0.1rem;
    cursor: pointer;
  }
  .bubble {
    position: absolute;
    height: 1.8rem;
    width: 1.8rem;
    margin-top: 0.1rem;
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
