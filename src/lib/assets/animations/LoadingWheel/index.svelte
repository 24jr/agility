<script>
  export let wid = 0.3;
  export let color = "var(--primary)";
</script>

<div class="loader" style="--wid: {wid}rem; --color: {color}" />

<style>
  .loader {
    margin: auto;
    border: var(--wid) solid transparent;
    border-top: var(--wid) solid var(--color);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: spinner 1s ease infinite;
    box-sizing: border-box;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
