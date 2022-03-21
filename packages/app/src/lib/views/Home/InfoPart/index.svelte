<script>
  import ipad3d_src from '$lib/assets/static/photos/ipad3d.png'
</script>

<div class="container">
	<div class="icon">
		<img src={ipad3d_src} alt="quickbooks_cert" height="250" width="auto" class="imgsty" />
	</div>
	<div class="textbox">
		<ul class="myul">
			<li>We work with small to medium size businesses</li>
			<li>Accounting software through quickbooks</li>
			<li>Located in Columbus, Ohio but remote friendly</li>
		</ul>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(clamp(40rem, 50%, 100%), 1fr));
		background-color: var(--primary);
		margin: 2rem;
		padding: 2rem 0;
		border-radius: 4rem;
	}
	.textbox {
		color: white;
		text-align: left;
		margin: auto;
		max-width: 25rem;
	}
	.myul {
		padding: 0;
		margin: 0;
		font-size: 2.2rem;
		line-height: 3rem;
	}
	.myul li {
		margin-bottom: 3rem;
		font-weight: 600;
	}
	.icon {
		margin: auto;
	}
	.imgsty {
		object-fit: contain;
		margin: 1rem;
	}
</style>
