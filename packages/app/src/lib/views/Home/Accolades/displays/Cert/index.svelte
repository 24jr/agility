<script>
  import quickbooks_cert_src from '$lib/assets/static/photos/quickbooks_cert.png'
</script>

<div class="container">
	<div class="bg" />
	<div class="icon">
		<img src={quickbooks_cert_src} alt="quickbooks_cert" height="90" width="auto" class="imgsty" />
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
	.imgsty {
		object-fit: contain;
		margin: 1rem;
	}
</style>
