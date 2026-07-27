export const parks = [
	{
		slug: 'haven',
		name: 'Haven',
		town: 'Dallas, NC',
		lotRent: {
			en: 'included with home rentals',
			es: 'incluida con la renta de la casa'
		},
		blurb: {
			en: 'An established community in Dallas with mature trees, minutes from Gastonia.',
			es: 'Una comunidad establecida en Dallas con árboles maduros, a minutos de Gastonia.'
		}
	},
	{
		slug: 'forest-hills',
		name: 'Forest Hills',
		town: 'Dallas, NC',
		lotRent: {
			en: 'included with home rentals',
			es: 'incluida con la renta de la casa'
		},
		blurb: {
			en: 'Quiet streets in Dallas, close to shopping and schools.',
			es: 'Calles tranquilas en Dallas, cerca de tiendas y escuelas.'
		}
	},
	{
		slug: 'sherrill',
		name: 'Sherrill',
		town: 'Stanley, NC',
		lotRent: {
			en: 'included with home rentals',
			es: 'incluida con la renta de la casa'
		},
		blurb: {
			en: 'A small community in Stanley with a country setting.',
			es: 'Una comunidad pequeña en Stanley, en un entorno de campo.'
		}
	},
	{
		slug: 'belmont',
		name: 'Belmont',
		town: 'Belmont, NC',
		lotRent: {
			en: 'included with home rentals',
			es: 'incluida con la renta de la casa'
		},
		blurb: {
			en: 'Close to downtown Belmont shops, dining, and the greenway.',
			es: 'Cerca del centro de Belmont: tiendas, restaurantes y el sendero.'
		}
	}
];

export const parkBySlug = (slug) => parks.find((p) => p.slug === slug);
