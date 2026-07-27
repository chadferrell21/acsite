<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { site } from '$lib/site.js';
	import { parks } from '$lib/data/parks.js';
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
				<label for="a-park">{t('Which community?', '¿Qué comunidad?')}</label>
				<select id="a-park" name="park">
					{#each parks as p}<option>{p.name}</option>{/each}
					<option>{t('Any / not sure', 'Cualquiera / no sé')}</option>
				</select>
				<label for="a-people">{t('Who will live in the home?', '¿Quiénes vivirán en la casa?')}</label>
				<input id="a-people" name="household" placeholder={t('e.g. 2 adults, 2 kids', 'ej. 2 adultos, 2 niños')} />
				<label for="a-income">{t('Monthly income (approximate)', 'Ingreso mensual (aproximado)')}</label>
				<input id="a-income" name="income" />
				<label for="a-notes">{t('Anything else we should know?', '¿Algo más que debamos saber?')}</label>
				<textarea id="a-notes" name="notes"></textarea>
				<p style="margin-top:1rem"><button class="btn" type="submit">{t('Send application', 'Enviar solicitud')}</button></p>
			</form>
		{:else}
			<div class="card">
				<p>
					{t('Email your application to', 'Envíe su solicitud por correo a')}
					<a href="mailto:{site.email}?subject=[APPLICATION]">{site.email}</a>
					{t('with your name, phone, which community, who will live in the home, and monthly income.',
						'con su nombre, teléfono, comunidad de interés, quiénes vivirán en la casa e ingreso mensual.')}
				</p>
			</div>
		{/if}
	</div>
</section>
