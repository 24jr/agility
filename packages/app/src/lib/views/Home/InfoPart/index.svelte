<script>
  import ipad3d_src from '$lib/assets/static/photos/ipad3d.webp'
</script>

<div class="container cardshadows">
	<div class="imgbox">
		<img src={ipad3d_src} alt="ipad3d_src" height="100%" width="100%" class="imgsty" />
	</div>
	<div class="textbox">
		<ul class="myul">
			<li>We work with small to medium size businesses.<br /><br /></li>
			<li>Accounting software through quickbooks.<br /><br /></li>
			<li>Located in Columbus, Ohio but remote-friendly.</li>
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
	}
	.imgbox {
		max-height: 25rem;
		height: clamp(10rem, 100%, 25rem);
		/* width: clamp(10rem, 100%, 25rem); */
		margin: 1rem;
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
		line-height: 3rem;
		color: white;
		text-align: left;
		margin: auto;
		list-style-type: none;
	}
	.myul li {
		font-weight: 400;
		font-size: 2.2rem;
	}
	.imgsty {
		object-fit: contain;
	}
</style>
