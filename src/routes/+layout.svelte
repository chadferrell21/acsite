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

<footer>
	<div class="wrap footgrid">
		<div>
			<img class="footlogo" src="/ac-logo-dark.png" alt="" />
			<p>
				{t('Manufactured home communities in Gaston County, NC.',
					'Comunidades de casas móviles en el condado de Gaston, NC.')}
			</p>
		</div>
		<div>
			<a href="mailto:{site.email}">{site.email}</a><br />
			<a href="/apply">{t('Apply for a home', 'Solicitar una casa')}</a><br />
			<a href="/maintenance">{t('Maintenance requests', 'Solicitudes de mantenimiento')}</a>
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
		padding-top: 0.6rem;
		padding-bottom: 0.6rem;
		flex-wrap: wrap;
	}
	.brand img { height: 3.4rem; width: auto; display: block; }
	.links { display: flex; align-items: center; gap: 1.05rem; flex-wrap: wrap; }
	.links a { text-decoration: none; font-weight: 600; color: var(--ink); }
	.links a:hover { color: var(--navy); }
	.langbtn {
		font: inherit;
		font-weight: 700;
		background: transparent;
		border: 2px solid var(--navy);
		color: var(--navy);
		border-radius: 0.4rem;
		padding: 0.15rem 0.6rem;
		cursor: pointer;
	}
	.langbtn:hover { background: var(--navy); color: #fff; }
	.footlogo { height: 3rem; width: auto; margin-bottom: 0.5rem; }
	.footgrid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		padding: 2rem 1.25rem 0.5rem;
	}
	.tiny { padding-bottom: 1.5rem; font-size: 0.85rem; opacity: 0.75; }
</style>
