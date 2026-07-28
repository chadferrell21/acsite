<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { parks } from '$lib/data/parks.js';
	import { listings } from '$lib/data/listings.js';
	let t = $derived(pickFactory($lang));
	const featured = listings.slice(0, 3);
</script>

<svelte:head>
	<title>Mobile Homes for Rent in Gaston County, NC — AC Investment Properties</title>
	<meta
		name="description"
		content="Homes for rent in four communities near Belmont and Gastonia, NC. See current rentals and apply online."
	/>
</svelte:head>

<section class="hero">
	<div class="wrap herogrid">
		<div>
			<p class="eyebrow">Gaston County, North Carolina</p>
			<h1>
				{t('Homes for rent in Gaston County.',
					'Casas en renta en el condado de Gaston.')}
			</h1>
			<p class="lede">
				{t('Four welcoming communities near Belmont and Gastonia. See current rentals and apply online.',
					'Cuatro comunidades acogedoras cerca de Belmont y Gastonia. Vea las rentas disponibles y solicite en línea.')}
			</p>
			<p>
				<a class="btn" href="/homes">{t('See available homes', 'Ver casas disponibles')}</a>
				<a class="btn gold" href="/apply" style="margin-left:0.55rem">{t('Apply', 'Solicitar')}</a>
			</p>
		</div>
		<svg class="heroscene" viewBox="0 0 1400 420" aria-hidden="true">
			<path d="M-20 340 C 300 398 640 380 940 300 S 1180 245 1255 228" fill="none"
				stroke="#14509e" stroke-width="15" stroke-linecap="round" />
			<path d="M-20 366 C 310 424 660 404 950 322 S 1195 268 1268 250" fill="none"
				stroke="#24262a" stroke-width="7" stroke-linecap="round" opacity="0.85" />
			<image href="/ac-logo.png" x="896" y="0" width="504" height="420" />
		</svg>
	</div>

</section>

<section>
	<div class="wrap">
		<h2 class="board">{t('Available now', 'Disponibles ahora')}</h2>
		<div class="grid">
			{#each featured as h}
				<a class="card listing" href="/homes">
					<strong>{h.title[$lang] ?? h.title.en}</strong>
					<p>
						{#if h.beds}{h.beds} {t('bed', 'hab')} · {h.baths} {t('bath', 'baños')} · {/if}
						{h.price || (h.terms[$lang] ?? h.terms.en)}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="wrap">
		<h2 class="board">{t('Our communities', 'Nuestras comunidades')}</h2>
		<div class="grid">
			{#each parks as p}
				<a class="card" href={'/parks/' + p.slug}>
					<strong>{p.name}</strong>
					<p class="eyebrow">{p.town}</p>
					<p>{p.blurb[$lang] ?? p.blurb.en}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero { position: relative; background: linear-gradient(175deg, var(--sky) 0%, var(--paper) 90%); padding: 3.2rem 0 0; overflow: hidden; }
	.herogrid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
		padding-bottom: 1.2rem;
	}
	.heroscene {
		width: 100%;
		height: auto;
		display: block;
		margin-top: -1.5rem;
	}

	.lede { font-size: 1.18rem; max-width: 34rem; color: var(--muted); }
	.listing, .card { text-decoration: none; color: inherit; display: block; }
</style>
