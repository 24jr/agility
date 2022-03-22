<script>
  import ipad3d_src from '$lib/assets/static/photos/ipad3d.webp'
</script>

<div class="container">
	<div class="icon">
		<img src={ipad3d_src} alt="quickbooks_cert" height="250" width="auto" class="imgsty" />
	</div>
	<div class="textbox">
		<ul class="myul">
			<li>We work with small to medium size businesses.</li>
			<br />
			<li>Accounting software through quickbooks.</li>
			<br />
			<li>Located in Columbus, Ohio but remote friendly.</li>
		</ul>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(clamp(30rem, 50%, 100%), 1fr));
		background-color: var(--primary);
		margin: 1rem 2rem;
		border-radius: 4rem;
		padding: 2rem;
		box-shadow: 0 0 1rem #cccccc20;
	}
	.textbox {
		background: var(--primary-light);
		display: flex;
		padding: 2rem;
		border-radius: 2rem;
	}
	.myul {
		padding: 0;
		margin: 0;
		font-size: 2.2rem;
		line-height: 3rem;
		color: white;
		text-align: left;
		margin: auto;
		list-style-type: none;
	}
	.myul li {
		font-weight: 400;
	}
	.imgsty {
		object-fit: contain;
		margin: 1rem;
	}
</style>
