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
		content="Affordable manufactured homes for rent in four family-run communities near Belmont and Gastonia, NC. See available homes and apply online."
	/>
</svelte:head>

<!-- HERO: navy sky over the roofline — the signature at full size -->
<section class="hero">
	<div class="wrap herogrid">
		<div>
			<p class="eyebrow light">Gaston County, North Carolina</p>
			<h1>{t('A place to call home.', 'Un lugar para llamar hogar.')}</h1>
			<p class="lede">
				{t(
					'Four family-run manufactured home communities with affordable rents and neighbors who wave back.',
					'Cuatro comunidades familiares de casas móviles con rentas accesibles y vecinos que saludan.'
				)}
			</p>
			<p>
				<a class="btn gold" href="/homes">{t('See available homes', 'Ver casas disponibles')}</a>
				<a class="btn ghost" href="/apply">{t('Apply now', 'Solicitar ahora')}</a>
			</p>
		</div>
		<img class="herologo" src="/ac-logo-dark.png" alt="" />
	</div>
	<div class="roofline" aria-hidden="true"></div>
</section>

<section>
	<div class="wrap">
		<h2 class="board">{t('Available now', 'Disponibles ahora')}</h2>
		<div class="grid">
			{#each featured as h}
				<a class="card listing" href="/homes">
					<strong>{h.title[$lang] ?? h.title.en}</strong>
					<p>{h.beds} {t('bed', 'hab')} · {h.baths} {t('bath', 'baños')} · {h.price}</p>
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
	.hero {
		background: linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 70%);
		color: #fff;
		padding: 3.6rem 0 0;
	}
	.herogrid {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 2rem;
		padding-bottom: 2.6rem;
	}
	.herologo { height: 10rem; width: auto; opacity: 0.95; }
	@media (max-width: 44rem) { .herologo { display: none; } }
	.eyebrow.light { color: #9fd3e2; }
	.lede { font-size: 1.2rem; max-width: 34rem; color: #e6ecf5; }
	.btn.ghost {
		background: transparent;
		border: 2px solid #fff;
		margin-left: 0.6rem;
	}
	.btn.ghost:hover { background: rgba(255, 255, 255, 0.14); }
	/* the roofline: cloud-colored roofs rising into the navy sky */
	.roofline {
		height: 3.2rem;
		background: var(--cloud);
		clip-path: var(--roof);
	}
	.listing, .card { text-decoration: none; color: inherit; display: block; }
</style>
