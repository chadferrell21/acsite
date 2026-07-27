<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Lease Agreement — AC Investment Properties</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Lease agreement', 'Contrato de renta')}</h1>
		<p>
			{t('Approved for a home? You can fill out the lease ahead of time — type directly into the PDF, then save or print it.',
				'¿Aprobado para una casa? Puede completar el contrato con anticipación — escriba directamente en el PDF y luego guárdelo o imprímalo.')}
		</p>
		<p>
			<a class="btn" href="/lease/AC_Lease_Fillable.pdf" target="_blank" rel="noopener">
				{t('Open the fillable lease (PDF)', 'Abrir el contrato (PDF)')}
			</a>
		</p>
		<div class="card">
			<p style="margin:0">
				<strong>{t('Important', 'Importante')}:</strong>
				{t('For your security, please do not email the completed lease — it contains sensitive information. Bring it with you to signing, or fill it out together with us in person.',
					'Por su seguridad, no envíe el contrato completado por correo electrónico — contiene información sensible. Tráigalo a la firma, o complételo con nosotros en persona.')}
			</p>
		</div>
		<p style="margin-top:1rem">
			{t('Questions?', '¿Preguntas?')}
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</section>
