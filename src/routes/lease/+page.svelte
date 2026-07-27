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
				{t('After filling it out, please email the completed lease to',
					'Después de completarlo, envíe el contrato por correo a')}
				<a href="mailto:{site.email}?subject=[LEASE]">{site.email}</a>
				{t('before your meeting so we can have everything ready for signing.',
					'antes de su cita para que todo esté listo para la firma.')}
			</p>
		</div>
		<p style="margin-top:1rem">
			{t('Questions?', '¿Preguntas?')}
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</section>
