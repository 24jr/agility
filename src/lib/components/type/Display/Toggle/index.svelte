<script>
  export let isOn = true;
  export let color = "var(--primary)";
  export let isDisabled = false;
</script>

<label class="switch">
  <input type="checkbox" disabled={isDisabled} bind:checked={isOn} />
  <span class="slider round" style="--color: {color};" class:isDisabled />
</label>

<style>
  .switch {
    position: relative;
    width: 3.4rem;
    height: 2rem;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background: var(--bg-dark);
    box-shadow: inset 0.2rem 0.2rem 0.4rem var(--shadow),
      inset -0.2rem -0.2rem 0.4rem var(--tint);
    cursor: pointer;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background: linear-gradient(-45deg, var(--white-light), var(--white-dark));
    box-shadow: 0.1rem 0.1rem 0.2rem var(--shadow),
      -0.1rem -0.1rem 0.2rem var(--tint);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: var(--color);
  }
  input:checked + .isDisabled {
    background-color: var(--contrast-soft);
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(1.4rem);
    -ms-transform: translateX(1.4rem);
    transform: translateX(1.4rem);
  }
  .slider.round {
    border-radius: 1.2rem;
  }
  .slider.round:before {
    border-radius: 50%;
  }
</style>
