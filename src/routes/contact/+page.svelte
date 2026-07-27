<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Contact — AC Investment Properties</title>
	<meta name="description" content="Contact AC Investment Properties about homes in Gaston County, NC." />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Contact us', 'Contáctenos')}</h1>
		<div class="card">
			<p>
				<strong>{t('Email', 'Correo')}:</strong>
				<a href="mailto:{site.email}">{site.email}</a>
			</p>
			<p>
				{t('Looking for a home?', '¿Busca casa?')}
				<a href="/apply">{t('Send an application', 'Envíe una solicitud')}</a>.
				{t('Current resident with a repair?', '¿Residente con una reparación?')}
				<a href="/maintenance">{t('Send a maintenance request', 'Envíe una solicitud de mantenimiento')}</a>.
			</p>
		</div>
	</div>
</section>
