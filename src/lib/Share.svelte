<script>
	// What search engines and link previews (Facebook, Messages, etc.)
	// read: the page's one true address and a title, summary and picture.
	// Addresses must be complete (https://...), never relative.
	import { site } from '$lib/site.js';
	let { path = '/', title, description, image = '/ac-logo.png' } = $props();
	const base = `https://${site.domain}`;
</script>

<svelte:head>
	<link rel="canonical" href="{base}{path}" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:url" content="{base}{path}" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{base}{image}" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
