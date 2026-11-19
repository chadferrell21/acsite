<script>
	import Share from '$lib/Share.svelte';
	import { lang, pickFactory } from '$lib/i18n.js';
	import { photoLarge, photoSmall } from '$lib/data/listings.js';
	import { parkBySlug } from '$lib/data/parks.js';
	let { data } = $props();
	let t = $derived(pickFactory($lang));
	let home = $derived(data.home);
	let park = $derived(parkBySlug(home.park));
	let photos = $derived(home.photos);

	// The photo viewer: -1 is closed, otherwise the index being shown.
	let view = $state({ at: -1 });
	let dialogEl;
	function open(i) {
		view.at = i;
		dialogEl?.showModal();
	}
	function close() {
		dialogEl?.close();
	}
	function step(by) {
		if (!photos.length) return;
		view.at = (view.at + by + photos.length) % photos.length;
	}
	function onKey(e) {
		if (view.at < 0) return;
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
	let alt = (p) => p[$lang] ?? p.en;
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
	<title>{home.title.en} — AC Investment Properties</title>
	<meta
		name="description"
		content="{home.title.en}{home.price ? ', ' + home.price : ''} in {park?.name}, {park?.town}. Photos and how to apply."
	/>
</svelte:head>
<Share
	path="/homes/{home.id}"
	title={home.title.en}
	description="{home.title.en}{home.price ? ', ' + home.price : ''} in {park?.name}, {park?.town}. Photos and how to apply."
	image={photos.length ? photoLarge(photos[0]) : '/ac-logo.png'}
/>

<section>
	<div class="wrap">
		<p><a href="/homes">← {t('All available homes', 'Todas las casas disponibles')}</a></p>
		<p class="eyebrow">
			{park?.name} · {park?.town} · {t('Lot', 'Lote')} {home.lot}
		</p>
		<h1 class="board">{home.title[$lang] ?? home.title.en}</h1>

		<div class="facts">
			{#if home.price}
				<p class="price">{home.price}</p>
			{/if}
			<p>
				{home.terms[$lang] ?? home.terms.en}{#if home.beds}
					· {home.beds} {t('bed', 'hab')} · {home.baths} {t('bath', 'baños')}{/if}{#if home.sqft}
					· {home.sqft} {t('sq ft', 'pies²')}{/if}
			</p>
			{#if home.address}<p>{home.address}</p>{/if}
			<p>
				<strong>{t('Lot rent', 'Renta de lote')}:</strong>
				{park?.lotRent[$lang] ?? park?.lotRent.en}
			</p>
			<p>
				<a class="btn" href="/apply">{t('Apply for this home', 'Solicitar esta casa')}</a>
				<a class="btn gold" href="/contact" style="margin-left:0.55rem">{t('Ask a question', 'Hacer una pregunta')}</a>
			</p>
		</div>

		{#if photos.length}
			<h2 class="board">{t('Photos', 'Fotos')}</h2>
			<div class="gallery">
				{#each photos as p, i}
					<button type="button" class="shot" class:lead={i === 0} onclick={() => open(i)}
						aria-label={t('Open photo', 'Abrir foto') + ' ' + (i + 1) + ': ' + alt(p)}>
						<img src={i === 0 ? photoLarge(p) : photoSmall(p)} alt={alt(p)}
							loading={i === 0 ? 'eager' : 'lazy'} />
					</button>
				{/each}
			</div>
		{:else}
			<p>{t('Photos are coming soon.', 'Las fotos estarán disponibles pronto.')}</p>
		{/if}
	</div>
</section>

<!-- Tapping the dark area around the photo closes the viewer. -->
<dialog bind:this={dialogEl} class="viewer" onclose={() => (view.at = -1)}
	onclick={(e) => { if (e.target === dialogEl) close(); }}>
	{#if view.at >= 0}
		<figure>
			<img src={photoLarge(photos[view.at])} alt={alt(photos[view.at])} />
			<figcaption>
				{alt(photos[view.at])} · {view.at + 1} / {photos.length}
			</figcaption>
		</figure>
		<div class="controls">
			<button type="button" class="btn gold" onclick={() => step(-1)}
				aria-label={t('Previous photo', 'Foto anterior')}>◀</button>
			<button type="button" class="btn" onclick={close}>{t('Close', 'Cerrar')}</button>
			<button type="button" class="btn gold" onclick={() => step(1)}
				aria-label={t('Next photo', 'Foto siguiente')}>▶</button>
		</div>
	{/if}
</dialog>

<style>
	.facts { margin-bottom: 1.6rem; }
	.price {
		font-family: var(--display);
		font-weight: 800;
		font-size: 1.9rem;
		color: var(--navy);
		margin: 0 0 0.2rem;
	}
	.gallery {
		display: grid;
		gap: 0.6rem;
		grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
	}
	.shot {
		padding: 0;
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		overflow: hidden;
		background: var(--sky);
		cursor: zoom-in;
		aspect-ratio: 4 / 3;
		position: relative;
		min-width: 0;
		min-height: 0;
	}
	.shot.lead { grid-column: 1 / -1; aspect-ratio: 16 / 10; }
	/* Out of flow, so a tall photo cannot stretch its tile over its neighbours. */
	.shot img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }

	.viewer {
		border: 0;
		padding: 0.8rem;
		background: transparent;
		max-width: 100vw;
		max-height: 100vh;
		width: 100vw;
		height: 100vh;
	}
	.viewer::backdrop { background: rgba(20, 22, 26, 0.92); }
	.viewer figure {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		pointer-events: none;
	}
	.viewer img {
		max-width: 100%;
		max-height: calc(100vh - 8.5rem);
		border-radius: 0.5rem;
		pointer-events: auto;
	}
	.viewer figcaption { color: #fff; margin-top: 0.5rem; font-size: 0.95rem; text-align: center; }
	.controls {
		display: flex;
		justify-content: center;
		gap: 0.6rem;
		margin-top: 0.7rem;
	}
	.controls .btn { min-width: 3.2rem; min-height: 2.8rem; }
</style>
