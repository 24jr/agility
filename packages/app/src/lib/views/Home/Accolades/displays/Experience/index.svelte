<script>
  import ExpIcon from './ExpIcon/index.svelte'
</script>

<div class="container">
	<ExpIcon color="white" size={9} />
</div>

<style>
	.container {
		display: flex;
		width: clamp(10rem, 20%, 14rem);
		height: minMax(18rem, 100%);
		background: var(--primary);
		border-radius: 2rem;
		justify-content: center;
		align-items: center;
		padding: 0 0.5rem;
	}
</style>
