<script>
  import { onDestroy, onMount } from "svelte";

  export let loaded = false;
  export let only_once = false;

  let root;
  let observer = null;
  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        loaded = false;
        if (entry.isIntersecting) {
          loaded = true;
          if(only_once){
            observer.disconnect();
          }
        }
      });
    });
    // }, { threshold: 1 });
    observer.observe(root);
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<div bind:this={root}>
  {#if loaded}
    <slot />
  {/if}
</div>
