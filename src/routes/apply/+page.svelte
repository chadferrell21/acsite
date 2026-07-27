<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Apply for a Home — AC Investment Properties</title>
	<meta name="description" content="Rental application for AC Investment Properties communities in Gaston County, NC." />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Rental application', 'Solicitud de renta')}</h1>
		<p>
			{t('Fill this out and we will get back to you by email — usually within two business days.',
				'Complete este formulario y le responderemos por correo electrónico, normalmente en dos días hábiles.')}
		</p>

		{#if site.formEndpoint}
			<form method="POST" action={site.formEndpoint}>
				<input type="hidden" name="_subject" value="[APPLICATION] achomesnc.com" />
				<label for="a-name">{t('Full name', 'Nombre completo')}</label>
				<input id="a-name" name="name" required />
				<label for="a-email">{t('Email', 'Correo electrónico')}</label>
				<input id="a-email" name="email" type="email" required />
				<label for="a-phone">{t('Phone', 'Teléfono')}</label>
				<input id="a-phone" name="phone" />
				<label for="a-notes">{t('Anything you want us to know? (optional)', '¿Algo que quiera contarnos? (opcional)')}</label>
				<textarea id="a-notes" name="notes"></textarea>
				<p style="margin-top:1rem"><button class="btn" type="submit">{t('Send application', 'Enviar solicitud')}</button></p>
			</form>
		{:else}
			<div class="card">
				<p>
					{t('Email your application to', 'Envíe su solicitud por correo a')}
					<a href="mailto:{site.email}?subject=[APPLICATION]">{site.email}</a>
					{t('with your name and phone number, and we will follow up with next steps.',
						'con su nombre y número de teléfono, y le responderemos con los siguientes pasos.')}
				</p>
				<p style="margin:0">
					<a href="/lease">{t('Lease agreement (fillable PDF)', 'Contrato de renta (PDF)')}</a>
					— {t('fill it out and email it to us before your meeting.',
						'complételo y envíenoslo por correo antes de su cita.')}
				</p>
			</div>
		{/if}
	</div>
</section>
