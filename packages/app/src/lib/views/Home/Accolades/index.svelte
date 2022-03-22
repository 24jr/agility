<script>
  import Cert from "./displays/Cert/index.svelte"
  import Experience from "./displays/Experience/index.svelte"
  import Personable from "./displays/Personable/index.svelte"

  const items = [
    { icon: Cert, header: 'Credibile', subText: "Don't put your business at risk. Use a Quickbooks Certified ProAdvisor" },
    { icon: Experience, header: 'Experienced', subText: "Accounting is what we do and have been doing for 25+ years." },
    { icon: Personable, header: 'Personable', subText: "Direct communication. No robots. No hoops to jump though." },
  ]
</script>

<div class="container">
	{#each items as item (item.header)}
		<div class="accolade">
			<div>
				<svelte:component this={item.icon} />
			</div>
			<div class="textContainer">
				<h3 class="headerText">{item.header}</h3>
				<p class="subText">{item.subText}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(clamp(24rem, 30%, 100%), 1fr)); */
		grid-template-columns: repeat(
			auto-fit,
			minmax(clamp(33.3333%, (120rem - 100%) * 999, 100%), 1fr)
		);
		justify-content: space-around;
		margin: 0 1rem;
	}
	.accolade {
		display: flex;
		margin: 1rem;
		background: var(--white-light);
		border-radius: 4rem;
		padding: 2rem;
		box-shadow: 0 0 1rem #cccccc20;
	}
	.textContainer {
		display: flex;
		flex-direction: column;
		line-height: 2.8rem;
		max-width: 26rem;
		text-align: left;
		margin: auto;
	}
	.headerText {
		font-size: 3rem;
		color: var(--black-med);
		font-weight: 600;
		margin: 0 1.5rem 1rem 2rem;
	}
	.subText {
		color: var(--gray-dark);
		font-size: 1.8rem;
		margin: 0 1.5rem 2rem 2rem;
	}
</style>
