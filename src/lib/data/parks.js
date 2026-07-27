export const parks = [
	{
		slug: 'haven',
		address: '560 Old Willis School Rd, Dallas, NC 28034',
		lat: 35.350841, lng: -81.139789,
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
		address: '102 Lutz Dr, Dallas, NC 28034',
		lat: 35.372499, lng: -81.137372,
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
		address: '111 Sherrill, Stanley, NC 28164',
		lat: 35.379295, lng: -81.112456,
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
		address: '2 Dillon Dr, Belmont, NC 28012',
		lat: 35.230135, lng: -81.042052,
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
