<script>
  export let label = "label";
  export let isRequired = false;
  export let isDisabled = false;
  export let mx = 0.1;
  export let my = 0.1;
</script>

<div class="container" style="--mx: {mx}rem; --my: {my}rem;">
  <h4 class="attrLabel" class:required={isRequired} class:isDisabled>
    {label}:
  </h4>
  <div class="item">
    <slot />
  </div>
  <div />
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: var(--my) var(--mx);
    flex: 1;
  }
  .attrLabel {
    font-size: 1.4rem;
    text-align: left;
    margin-left: 0.3rem;
    margin-right: 1rem;
  }
  .isDisabled {
    color: var(--contrast-soft);
  }
  .required::after {
    content: "*";
    color: var(--red-error);
    margin-left: 2px;
  }
  .item {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: end;
    min-width: 30rem;
    max-width: 50rem;
    margin-right: 0;
    margin-left: auto;
  }
</style>
