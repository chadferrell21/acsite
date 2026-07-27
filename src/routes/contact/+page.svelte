<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Contact — AC Investment Properties</title>
	<meta name="description" content="Contact AC Investment Properties about homes in Gaston County, NC. Phone, email, and payment mailing address." />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Contact us', 'Contáctenos')}</h1>

		<div class="card" style="margin-bottom:1rem">
			<p class="eyebrow">{t('Phone', 'Teléfono')}</p>
			{#each site.phones as ph}
				<p style="margin:0.2rem 0"><a href="tel:{ph.replace(/-/g, '')}"><strong>{ph}</strong></a></p>
			{/each}
			<p class="eyebrow" style="margin-top:1rem">{t('Email', 'Correo')}</p>
			<p><a href="mailto:{site.email}">{site.email}</a></p>
		</div>

		<div class="card" style="margin-bottom:1rem">
			<p class="eyebrow">{t('Rent payments by mail', 'Pagos de renta por correo')}</p>
			<p style="margin-bottom:0.3rem"><strong>AC Investment Properties</strong><br />{site.payMail}</p>
			<p style="margin:0">
				{t('Checks and money orders only — please write your community and lot number on the payment.',
					'Solo cheques y giros postales — escriba su comunidad y número de lote en el pago.')}
			</p>
		</div>

		<div class="card">
			<p>
				{t('Looking for a home?', '¿Busca casa?')}
				<a href="/apply">{t('Send an application', 'Envíe una solicitud')}</a>.
				{t('Current resident with a repair?', '¿Residente con una reparación?')}
				<a href="/maintenance">{t('Send a maintenance request', 'Envíe una solicitud de mantenimiento')}</a>.
			</p>
		</div>
	</div>
</section>
