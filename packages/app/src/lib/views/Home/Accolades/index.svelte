<script>
  // import Cpa from "$lib/assets/static/random/Cpa/index.svelte"
  import Cert from "$lib/views/Home/Accolades/displays/Cert/index.svelte"
  import Experience from "$lib/views/Home/Accolades/displays/Experience/index.svelte"
  import Personable from "$lib/views/Home/Accolades/displays/Personable/index.svelte"
</script>

<div class="container">
	<div class="accolade">
		<div class="floatIcon">
			<Cert />
		</div>
		<div class="textContainer">
			<h3 class="headerText">Credibility</h3>
			<p class="subText">Don't let a mistake put you your business at risk.</p>
		</div>
	</div>

	<div class="accolade">
		<div class="floatIcon">
			<Experience />
		</div>
		<div class="textContainer">
			<h3 class="headerText">Experience</h3>
			<p class="subText">This what we do and have been doing for 25+ years.</p>
		</div>
	</div>

	<div class="accolade">
		<div class="floatIcon">
			<Personable />
		</div>
		<div class="textContainer">
			<h3 class="headerText">Personable</h3>
			<p class="subText">Direct communication. No robots. No hoops to jump though.</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(clamp(24rem, 30%, 100%), 1fr)); */
		grid-template-columns: repeat(
			auto-fit,
			minmax(clamp(33.3333%, (80rem - 100%) * 999, 100%), 1fr)
		);
		justify-content: space-around;
	}
	.accolade {
		position: relative;
		height: 32rem;
		width: 100%;
	}
	.floatIcon {
		position: absolute;
		top: 0;
		left: 50%;
		bottom: 30%;
		transform: translateX(-50%);
		z-index: 2;
	}
	.textContainer {
		position: absolute;
		top: 30%;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		margin: 1rem;
		background: var(--white-light);
		border-radius: 4rem;
		padding: 2rem;
		border: 1px solid var(--gray-light);
		line-height: 2.8rem;
	}
	.headerText {
		font-size: 4rem;
		color: var(--primary-dark);
		font-family: 'Lora';
		font-weight: 600;
		text-align: center;
		margin: 2.4rem auto 1.4rem auto;
	}
	.subText {
		font-size: 2rem;
		text-align: center;
		margin: 0 0 1rem 1rem;
	}
</style>
