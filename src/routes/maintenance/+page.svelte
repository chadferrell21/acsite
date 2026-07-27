<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	import { parks } from '$lib/data/parks.js';
	let t = $derived(pickFactory($lang));
</script>

<svelte:head>
	<title>Maintenance Request — AC Investment Properties</title>
	<meta name="description" content="Submit a maintenance request for your home." />
</svelte:head>

<section>
	<div class="wrap" style="max-width:44rem">
		<h1 class="board">{t('Maintenance request', 'Solicitud de mantenimiento')}</h1>
		<p>
			{t('Tell us what needs attention. For emergencies (gas smell, major water leak, no heat in winter), say EMERGENCY in the first line.',
				'Díganos qué necesita atención. Para emergencias (olor a gas, fuga de agua grave, sin calefacción en invierno), escriba EMERGENCIA en la primera línea.')}
		</p>

		{#if site.formEndpoint}
			<form method="POST" action={site.formEndpoint}>
				<input type="hidden" name="_subject" value="[MAINT] achomesnc.com" />
				<label for="m-name">{t('Your name', 'Su nombre')}</label>
				<input id="m-name" name="name" required />
				<label for="m-park">{t('Community', 'Comunidad')}</label>
				<select id="m-park" name="park" required>
					{#each parks as p}<option>{p.name}</option>{/each}
				</select>
				<label for="m-lot">{t('Lot number', 'Número de lote')}</label>
				<input id="m-lot" name="lot" required />
				<label for="m-issue">{t('What needs fixing?', '¿Qué necesita reparación?')}</label>
				<textarea id="m-issue" name="issue" required></textarea>
				<label for="m-contact">{t('Best way to reach you', 'Mejor forma de contactarle')}</label>
				<input id="m-contact" name="contact" required />
				<p style="margin-top:1rem"><button class="btn" type="submit">{t('Send request', 'Enviar solicitud')}</button></p>
			</form>
			<p style="margin-top:0.8rem">
				{t('You can reply to our confirmation email with photos.',
					'Puede responder a nuestro correo de confirmación con fotos.')}
			</p>
		{:else}
			<div class="card">
				<p>
					{t('Email your request to', 'Envíe su solicitud por correo a')}
					<a href="mailto:{site.email}?subject=[MAINT]">{site.email}</a>
					{t('— include your community, lot number, and what needs fixing. Photos help.',
						'— incluya su comunidad, número de lote y qué necesita reparación. Las fotos ayudan.')}
				</p>
			</div>
		{/if}
	</div>
</section>
