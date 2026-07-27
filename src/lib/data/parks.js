// TODO: replace every TODO with real facts (town, address, lot rent).
export const parks = [
	{
		slug: 'haven',
		name: 'Haven',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'An established community with mature trees, minutes from town.',
			es: 'Una comunidad establecida con árboles maduros, a minutos del pueblo.'
		}
	},
	{
		slug: 'forest-hills',
		name: 'Forest Hills',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'Quiet streets close to shopping and schools.',
			es: 'Calles tranquilas cerca de tiendas y escuelas.'
		}
	},
	{
		slug: 'sherrill',
		name: 'Sherrill',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'A small community with a country setting.',
			es: 'Una comunidad pequeña en un entorno de campo.'
		}
	},
	{
		slug: 'belmont',
		name: 'Belmont',
		town: 'Belmont, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'Close to downtown Belmont shops, dining, and the greenway.',
			es: 'Cerca del centro de Belmont: tiendas, restaurantes y el sendero.'
		}
	}
];

export const parkBySlug = (slug) => parks.find((p) => p.slug === slug);
