<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { listings, photoSmall, photoLarge } from '$lib/data/listings.js';
	import Share from '$lib/Share.svelte';
	import { news } from '$lib/data/news.js';
	let { data } = $props();
	let t = $derived(pickFactory($lang));
	let park = $derived(data.park);
	let open = $derived(listings.filter((h) => h.park === park.slug));
	let notices = $derived(
		news.filter((n) => n.park === park.slug || n.park === 'all').slice(0, 3)
	);
</script>

<svelte:head>
	<title>{park.name} Mobile Home Community — {park.town} | AC Investment Properties</title>
	<meta
		name="description"
		content="{park.name} manufactured home community in {park.town}. See available homes and community news."
	/>
</svelte:head>
<Share
	path="/parks/{park.slug}"
	title="{park.name} Mobile Home Community — {park.town}"
	description="{park.name} manufactured home community in {park.town}. See available homes and community news."
	image={open.find((h) => h.photos.length) ? photoLarge(open.find((h) => h.photos.length).photos[0]) : '/ac-logo.png'}
/>

<section>
	<div class="wrap">
		<p class="eyebrow">{park.town}</p>
		<h1>{park.name}</h1>
		<p>{park.blurb[$lang] ?? park.blurb.en}</p>
		<p><strong>{t('Lot rent', 'Renta de lote')}:</strong> {park.lotRent[$lang] ?? park.lotRent.en}</p>

		<h2 class="board">{t('Homes available here', 'Casas disponibles aquí')}</h2>
		{#if open.length === 0}
			<p>{t('No open homes in this community right now.',
				'No hay casas disponibles en esta comunidad por ahora.')}</p>
		{:else}
			<div class="grid">
				{#each open as h}
					<div class="card">
						{#if h.photos.length}
							<a class="cover" href={'/homes/' + h.id}>
								<img src={photoSmall(h.photos[0])} loading="lazy"
									alt={h.photos[0][$lang] ?? h.photos[0].en} />
							</a>
						{/if}
						<strong>{h.title[$lang] ?? h.title.en}</strong>
						<p>
							{#if h.beds}{h.beds} {t('bed', 'hab')} · {h.baths} {t('bath', 'baños')} · {/if}
							{h.price || (h.terms[$lang] ?? h.terms.en)}
						</p>
						<a class="btn" href="/apply">{t('Apply', 'Solicitar')}</a>
					</div>
				{/each}
			</div>
		{/if}

		<h2 class="board">{t('Community news', 'Avisos de la comunidad')}</h2>
		{#each notices as n}
			<div class="card" style="margin-bottom:0.8rem">
				<p class="eyebrow">{n.date}</p>
				<strong>{n.title[$lang] ?? n.title.en}</strong>
				<p>{n.body[$lang] ?? n.body.en}</p>
			</div>
		{/each}
		<p><a href="/news">{t('All news →', 'Todos los avisos →')}</a></p>
	</div>
</section>

<style>
	.cover {
		display: block;
		margin: -1.15rem -1.25rem 0.9rem;
		border-radius: 0.9rem 0.9rem 0 0;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		background: var(--sky);
	}
	.cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
</style>
