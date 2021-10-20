<script>
  import TransparentBG from "../TransparentBG/index.svelte";
  import { onMount } from "svelte"

  export let hex
  export let opacity

  let sliderEl
  let bubbleEl
  let min = 0
  let max = 1

  onMount(() => {
    setBubble()
  })
  
  function setBubble() {
    const newVal = Number(((opacity - min) * 100) / (max - min));
    const shortVal = opacity.toString().replace("0.", ".");
    bubbleEl.innerHTML = shortVal
    bubbleEl.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }
  
  function updateOpacity(val){
    opacity = JSON.parse(val)
    setBubble();
  }
</script>

{#if hex && !isNaN(opacity)}
  <div class="sliderBox">
    <div class="opacityBG">
      <TransparentBG />
      <div class="opcityColorBlur" style="background-image: linear-gradient(90deg, transparent, {hex});"></div>
    </div>
    <output bind:this={bubbleEl} class="bubble"></output>
    <input
      bind:this={sliderEl}
      class="slider"
      type="range"
      min={min}
      max={max}
      step="0.01"
      value={opacity}
      on:input={e => updateOpacity(e.target.value)}
    />
  </div>
{/if}

<style>
  .sliderBox {
    margin: 0.5rem 0;
    width: 100%;
    height: 2.4rem;
    position: relative;
    display: flex;
    border-radius: 2rem;
  }
  .opacityBG{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 4rem;
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
  