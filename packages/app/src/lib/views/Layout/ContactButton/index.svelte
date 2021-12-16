<script>
  import Button from "$lib/components/Button/index.svelte"
  import {
    openContactModalTrigger
  } from "$lib/components/ContactModal/store";
</script>

<Button type="color" on:click={() => $openContactModalTrigger++}>
  <h5 >Contact Us</h5>
</Button>