<script>
	import { browser } from '$app/environment';
	import { lang, pickFactory } from '$lib/i18n.js';
	import { listings } from '$lib/data/listings.js';
	import { parks, parkBySlug } from '$lib/data/parks.js';
	let t = $derived(pickFactory($lang));
	let filter = $state('all');
	let shown = $derived(
		listings.filter((h) => filter === 'all' || h.park === filter)
	);
	let mapEl;
	$effect(() => {
		if (!browser || !mapEl || mapEl.dataset.ready) return;
		mapEl.dataset.ready = '1';
		const css = document.createElement('link');
		css.rel = 'stylesheet';
		css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
		document.head.appendChild(css);
		const js = document.createElement('script');
		js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
		js.onload = () => {
			const L = window.L;
			const map = L.map(mapEl, { scrollWheelZoom: false });
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© OpenStreetMap contributors'
			}).addTo(map);
			const pts = [];
			for (const p of parks) {
				if (!p.lat) continue;
				const open = listings.filter((h) => h.park === p.slug).length;
				const m = L.marker([p.lat, p.lng]).addTo(map);
				m.bindPopup(
					`<strong>${p.name}</strong><br>${p.address}<br>` +
					`${open} home${open === 1 ? '' : 's'} listed · ` +
					`<a href="/parks/${p.slug}">${p.name} page</a>`
				);
				pts.push([p.lat, p.lng]);
			}
			if (pts.length) map.fitBounds(pts, { padding: [40, 40] });
		};
		document.head.appendChild(js);
	});
</script>

<svelte:head>
	<title>Available Homes — AC Investment Properties, Gaston County NC</title>
	<meta name="description" content="Current homes for rent in our Gaston County communities — Dallas, Stanley, and Belmont NC." />
</svelte:head>

<section>
	<div class="wrap">
		<h1 class="board">{t('Available homes', 'Casas disponibles')}</h1>

		<label for="parkpick">{t('Show homes in', 'Mostrar casas en')}</label>
		<select id="parkpick" bind:value={filter} style="max-width:16rem; margin-bottom:1.2rem">
			<option value="all">{t('All communities', 'Todas las comunidades')}</option>
			{#each parks as p}<option value={p.slug}>{p.name} — {p.town}</option>{/each}
		</select>

		{#if shown.length === 0}
			<p>{t('Nothing open in this community right now — check back soon or send an application.',
				'No hay casas disponibles en esta comunidad por ahora — vuelva pronto o envíe una solicitud.')}</p>
		{/if}
		<div class="grid">
			{#each shown as h}
				<div class="card">
					<p class="eyebrow">{parkBySlug(h.park)?.name} · {t('Lot', 'Lote')} {h.lot}</p>
					<strong>{h.title[$lang] ?? h.title.en}</strong>
					{#if h.beds}
						<p>
							{h.beds} {t('bed', 'hab')} · {h.baths} {t('bath', 'baños')}{#if h.sqft}
								· {h.sqft} {t('sq ft', 'pies²')}{/if}
						</p>
					{/if}
					<p><strong>{h.price}</strong>{#if h.price} — {/if}{h.terms[$lang] ?? h.terms.en}</p>
					<a class="btn" href="/apply">{t('Apply for this home', 'Solicitar esta casa')}</a>
				</div>
			{/each}
		</div>

		<h2 class="board" style="margin-top:2.2rem">{t('Find our communities', 'Encuentre nuestras comunidades')}</h2>
		<div class="mapbox" bind:this={mapEl}></div>
	</div>
</section>

<style>
	.mapbox {
		height: 24rem;
		border: 1px solid var(--line);
		border-radius: 0.9rem;
		overflow: hidden;
	}
</style>
