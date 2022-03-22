<script>
  import quickbooks_cert_src from '$lib/assets/static/photos/quickbooks_cert.webp'
</script>

<div class="container">
	<img src={quickbooks_cert_src} alt="quickbooks_cert" height="90" width="auto" class="imgsty" />
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
	}
	.imgsty {
		object-fit: contain;
		margin: 1rem;
	}
</style>
