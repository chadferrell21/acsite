// One entry per available home. Prices by type: 2/1=$1,000, 2/2=$1,100,
// 3/2=$1,200 — lot rent included. Photos: files in static/photos/,
// filenames listed per home.
export const listings = [
	{
		id: 'H109',
		park: 'haven',
		lot: '109',
		beds: 3, baths: 2, sqft: null,
		price: '$1,200/mo',
		terms: { en: 'For rent', es: 'En renta' },
		title: { en: '3 bed / 2 bath home', es: 'Casa de 3 hab / 2 baños' },
		photos: []
	},
	{
		id: 'FH205',
		park: 'forest-hills',
		lot: '205',
		beds: 3, baths: 2, sqft: null,
		price: '$1,200/mo',
		terms: { en: 'For rent', es: 'En renta' },
		title: { en: '3 bed / 2 bath home', es: 'Casa de 3 hab / 2 baños' },
		photos: []
	},
	{
		id: 'B9',
		park: 'belmont',
		lot: '9',
		beds: 2, baths: 2, sqft: null,
		price: '$1,100/mo',
		terms: { en: 'For rent', es: 'En renta' },
		title: { en: '2 bed / 2 bath home', es: 'Casa de 2 hab / 2 baños' },
		photos: []
	},
	{
		id: 'B25',
		park: 'belmont',
		lot: '25',
		beds: 2, baths: 1, sqft: null,
		price: '$1,000/mo',
		terms: { en: 'For rent', es: 'En renta' },
		title: { en: '2 bed / 1 bath home', es: 'Casa de 2 hab / 1 baño' },
		photos: []
	},
	{
		id: 'FH108',
		park: 'forest-hills',
		lot: '108',
		beds: null, baths: null, sqft: null,
		price: '',
		terms: { en: 'Coming soon', es: 'Próximamente' },
		title: {
			en: 'New home under construction — 108 Lutz Dr',
			es: 'Casa nueva en construcción — 108 Lutz Dr'
		},
		photos: []
	},
	{
		id: 'FH208',
		park: 'forest-hills',
		lot: '208',
		beds: null, baths: null, sqft: null,
		price: '',
		terms: { en: 'Coming soon', es: 'Próximamente' },
		title: {
			en: 'New home under construction — 208 Lutz Dr',
			es: 'Casa nueva en construcción — 208 Lutz Dr'
		},
		photos: []
	}
	// PENDING — activate when bed/bath confirmed:
	// { id: 'B2',   park: 'belmont', lot: '2',   ... },
	// { id: 'H304', park: 'haven',   lot: '304', ... },
	// { id: 'H550', park: 'haven',   lot: '550', ... },  // 550 Old Willis School Rd
	// { id: 'H560', park: 'haven',   lot: '560', ... },
	// { id: 'H566', park: 'haven',   lot: '566', ... },
];
