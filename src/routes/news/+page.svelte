<script>
	import { lang, pickFactory } from '$lib/i18n.js';
	import { news } from '$lib/data/news.js';
	import { parks, parkBySlug } from '$lib/data/parks.js';
	let t = $derived(pickFactory($lang));
	let filter = $state('all');
	let shown = $derived(
		news.filter((n) => filter === 'all' || n.park === filter || n.park === 'all')
	);
</script>

<svelte:head>
	<title>Community News — AC Investment Properties</title>
	<meta name="description" content="Announcements and updates for our Gaston County communities." />
</svelte:head>

<section>
	<div class="wrap">
		<h1 class="board">{t('Community news', 'Avisos de la comunidad')}</h1>
		<label for="parkfilter">{t('Show news for', 'Mostrar avisos de')}</label>
		<select id="parkfilter" bind:value={filter} style="max-width:16rem">
			<option value="all">{t('All communities', 'Todas las comunidades')}</option>
			{#each parks as p}<option value={p.slug}>{p.name}</option>{/each}
		</select>

		{#each shown as n}
			<div class="card" style="margin-top:1rem">
				<p class="eyebrow">
					{n.date} · {n.park === 'all' ? t('All communities', 'Todas') : parkBySlug(n.park)?.name}
				</p>
				<strong>{n.title[$lang] ?? n.title.en}</strong>
				<p>{n.body[$lang] ?? n.body.en}</p>
			</div>
		{/each}
	</div>
</section>
