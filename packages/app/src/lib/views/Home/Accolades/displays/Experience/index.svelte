<script>
  import ExpIcon from './ExpIcon/index.svelte'
</script>

<div class="container">
	<div class="bg" />
	<div class="icon">
		<ExpIcon color="white" size={9} />
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		width: 14rem;
		height: 14rem;
	}
	.bg {
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: var(--primary);
		border-radius: 9rem;
	}
	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
	}
</style>
