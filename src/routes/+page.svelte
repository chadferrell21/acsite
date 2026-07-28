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
			<path d="M-30 322 C 300 372 640 350 842 286 C 930 258 972 220 998 191
				C 964 228 906 274 848 306 C 656 390 310 414 -30 366 Z"
				fill="#14509e" />
			<path d="M-30 356 C 310 408 656 388 852 320 C 940 292 978 306 1002 296
				C 970 318 908 340 854 336 C 660 404 320 428 -30 376 Z"
				fill="#24262a" opacity="0.85" />
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
