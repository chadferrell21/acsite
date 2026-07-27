<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { listings } from '$lib/data/listings.js';
	import { parkBySlug } from '$lib/data/parks.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Available Homes — AC Investment Properties, Gaston County NC</title>
	<meta name="description" content="Current manufactured homes for rent in our Gaston County communities." />
</svelte:head>

<section>
	<div class="wrap">
		<h1 class="board">{t('Available homes', 'Casas disponibles')}</h1>
		{#if listings.length === 0}
			<p>{t('Nothing open right now — check back soon or send an application.',
				'No hay casas disponibles por ahora — vuelva pronto o envíe una solicitud.')}</p>
		{/if}
		<div class="grid">
			{#each listings as h}
				<div class="card">
					<p class="eyebrow">{parkBySlug(h.park)?.name} · {t('Lot', 'Lote')} {h.lot}</p>
					<strong>{h.title[$lang] ?? h.title.en}</strong>
					<p>
						{h.beds} {t('bed', 'hab')} · {h.baths} {t('bath', 'baños')} ·
						{h.sqft} {t('sq ft', 'pies²')}
					</p>
					<p><strong>{h.price}</strong> — {h.terms[$lang] ?? h.terms.en}</p>
					<a class="btn" href="/apply">{t('Apply for this home', 'Solicitar esta casa')}</a>
				</div>
			{/each}
		</div>
	</div>
</section>
