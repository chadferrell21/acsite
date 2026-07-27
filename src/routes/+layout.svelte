<script>
	import '../app.css';
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let { children } = $props();
	let t = $derived(pickFactory($lang));
	const year = new Date().getFullYear();
</script>

<header>
	<nav class="wrap nav">
		<a class="brand" href="/">
			<img src="/ac-logo.png" alt="AC Investment Properties" />
		</a>
		<div class="links">
			<a href="/homes">{t('Homes', 'Casas')}</a>
			<a href="/news">{t('News', 'Avisos')}</a>
			<a href="/apply">{t('Apply', 'Solicitar')}</a>
			<a href="/maintenance">{t('Maintenance', 'Mantenimiento')}</a>
			<a href="/contact">{t('Contact', 'Contacto')}</a>
			<button
				class="langbtn"
				onclick={() => lang.set($lang === 'es' ? 'en' : 'es')}
				aria-label={t('Cambiar a español', 'Switch to English')}
			>
				{$lang === 'es' ? 'EN' : 'ES'}
			</button>
		</div>
	</nav>
</header>

<main>
	{@render children()}
</main>

<svg class="swoosh" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
	<path d="M0 34 C300 6 560 58 1200 18" fill="none" stroke="#14509e" stroke-width="10" stroke-linecap="round" />
	<path d="M0 52 C320 26 600 74 1200 36" fill="none" stroke="#24262a" stroke-width="5" stroke-linecap="round" opacity="0.85" />
</svg>

<footer>
	<div class="wrap footgrid">
		<div>
			<img class="footlogo" src="/ac-logo.png" alt="" />
			<p>
				{t('Family-owned communities in Gaston County, NC.',
					'Comunidades familiares en el condado de Gaston, NC.')}
			</p>
		</div>
		<div class="footlinks">
			<a href="tel:{site.phones[0].replace(/-/g, '')}">{site.phones[0]}</a>
			<a href="mailto:{site.email}">{site.email}</a>
			<a href="/apply">{t('Rental application', 'Solicitud de renta')}</a>
			<a href="/maintenance">{t('Maintenance requests', 'Solicitudes de mantenimiento')}</a>
			<a href="/news">{t('Community news', 'Avisos de la comunidad')}</a>
			<a href="/lease">{t('Lease agreement', 'Contrato de renta')}</a>
			<a href="/privacy">{t('Privacy', 'Privacidad')}</a>
		</div>
	</div>
	<div class="wrap tiny">© {year} {site.name}</div>
</footer>

<style>
	header { background: var(--white); border-bottom: 1px solid var(--line); }
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-top: 0.55rem;
		padding-bottom: 0.55rem;
		flex-wrap: wrap;
	}
	.brand img { height: 3.6rem; width: auto; display: block; }
	.links { display: flex; align-items: center; gap: 1.1rem; flex-wrap: wrap; }
	.links a { text-decoration: none; font-weight: 600; color: var(--ink); }
	.links a:hover { color: var(--navy); }
	.langbtn {
		font: inherit;
		font-weight: 700;
		background: transparent;
		border: 2px solid var(--navy);
		color: var(--navy);
		border-radius: 2rem;
		padding: 0.15rem 0.7rem;
		cursor: pointer;
	}
	.langbtn:hover { background: var(--navy); color: #fff; }
	.swoosh { margin-top: 2rem; }
	.footlogo { height: 3.4rem; width: auto; margin-bottom: 0.4rem; }
	.footgrid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		padding: 2rem 1.4rem 0.5rem;
	}
	.footlinks { display: grid; gap: 0.35rem; align-content: start; padding-top: 0.6rem; }
	.footlinks a { text-decoration: none; }
	.footlinks a:hover { text-decoration: underline; }
	.tiny { padding-bottom: 1.5rem; font-size: 0.85rem; color: var(--muted); }
</style>
