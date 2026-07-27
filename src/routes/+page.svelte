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
		<img class="herologo" src="/ac-logo.png" alt="" />
	</div>
	<svg class="swoosh" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0 22 C340 54 620 2 1200 40" fill="none" stroke="#14509e" stroke-width="10" stroke-linecap="round" />
		<path d="M0 40 C360 70 660 20 1200 54" fill="none" stroke="#24262a" stroke-width="5" stroke-linecap="round" opacity="0.85" />
	</svg>
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
	.hero { background: linear-gradient(175deg, var(--sky) 0%, var(--paper) 90%); padding: 3.2rem 0 0; }
	.herogrid {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 2rem;
		padding-bottom: 1.6rem;
	}
	.herologo { height: 12rem; width: auto; }
	@media (max-width: 46rem) { .herologo { display: none; } }
	.lede { font-size: 1.18rem; max-width: 34rem; color: var(--muted); }
	.listing, .card { text-decoration: none; color: inherit; display: block; }
</style>
