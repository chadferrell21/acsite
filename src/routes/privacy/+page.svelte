<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Privacy — AC Investment Properties</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Privacy', 'Privacidad')}</h1>
		<p>
			{t('This site uses privacy-friendly, aggregate analytics (visit counts, pages viewed, general region). We do not use tracking cookies and we do not sell or share visitor data.',
				'Este sitio usa estadísticas agregadas que respetan la privacidad (número de visitas, páginas vistas, región general). No usamos cookies de rastreo y no vendemos ni compartimos datos de visitantes.')}
		</p>
		<p>
			{t('Your language preference is saved on your own device. Information you send through our forms (applications, maintenance requests) goes to our email and is used only to respond to you.',
				'Su preferencia de idioma se guarda en su propio dispositivo. La información que envía en nuestros formularios (solicitudes, mantenimiento) llega a nuestro correo y se usa solo para responderle.')}
		</p>
		<p>
			{t('Questions?', '¿Preguntas?')}
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</section>
