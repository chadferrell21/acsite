// TODO: replace every TODO with real facts (town, address, lot rent).
export const parks = [
	{
		slug: 'haven',
		name: 'Haven',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'A quiet, established community with mature trees and easy access to town.',
			es: 'Una comunidad tranquila y establecida, con árboles maduros y fácil acceso al pueblo.'
		}
	},
	{
		slug: 'forest-hills',
		name: 'Forest Hills',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'Family-friendly streets minutes from shopping and schools.',
			es: 'Calles familiares a minutos de tiendas y escuelas.'
		}
	},
	{
		slug: 'sherrill',
		name: 'Sherrill',
		town: 'TODO town, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'A small community with a country feel and friendly neighbors.',
			es: 'Una comunidad pequeña con ambiente de campo y vecinos amables.'
		}
	},
	{
		slug: 'belmont',
		name: 'Belmont',
		town: 'Belmont, NC',
		lotRent: 'TODO $/mo',
		blurb: {
			en: 'Close to downtown Belmont — shops, dining, and the river greenway.',
			es: 'Cerca del centro de Belmont: tiendas, restaurantes y el sendero del río.'
		}
	}
];

export const parkBySlug = (slug) => parks.find((p) => p.slug === slug);
