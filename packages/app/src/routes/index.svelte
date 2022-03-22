<script>
  import Home from "$lib/views/Home/index.svelte"
  import agility_card_src from '$lib/assets/static/photos/agility_card.webp'
</script>

<svelte:head>
	<title>Agility Accounting</title>
	<meta
		name="description"
		content="Agility Accounting does accounting for small to medium size buisinesses through use of quickbooks. We are located in Columbus, Ohio but can opperae remotely as well."
	/>
	<meta name="googlebot" content="all" />
	<meta name="robots" content="index" />
	<html lang="en" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Agility Accounting" />
	<meta name="twitter:description" content="Accounting in Central Ohio" />
	<meta property="og:title" content="Agility Accounting" />
	<meta property="og:description" content="Accounting in Central Ohio" />
	<meta property="og:image" content={agility_card_src} />
</svelte:head>

<Home />
