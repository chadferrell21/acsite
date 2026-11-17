// One entry per available home. Prices by type: 2/1=$1,000, 2/2=$1,100,
// 3/2=$1,200 — lot rent included (108 Lutz Dr, renovated: $1,400).
// Photos: static/photos/<home>/NAME.jpg (large) and NAME-sm.jpg (small),
// listed per home as { f: '<home>/NAME', en: '...', es: '...' }; the
// first photo is the cover.
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
		address: '108 Lutz Dr, Dallas, NC 28034',
		beds: 3, baths: 2, sqft: null,
		price: '$1,400/mo',
		terms: { en: 'For rent', es: 'En renta' },
		title: {
			en: 'Renovated 3 bed / 2 bath home — 108 Lutz Dr',
			es: 'Casa renovada de 3 hab / 2 baños — 108 Lutz Dr'
		},
		photos: [
			{ f: 'fh108/01-front', en: 'Front of the home with new deck and steps', es: 'Frente de la casa con terraza y escalones nuevos' },
			{ f: 'fh108/02-front-deck', en: 'Front deck and landscaping', es: 'Terraza del frente y jardín' },
			{ f: 'fh108/03-living-kitchen', en: 'Open living room and kitchen', es: 'Sala y cocina de concepto abierto' },
			{ f: 'fh108/04-living-kitchen-2', en: 'Living room looking toward the kitchen', es: 'Sala con vista a la cocina' },
			{ f: 'fh108/05-kitchen', en: 'Kitchen with island and new cabinets', es: 'Cocina con isla y gabinetes nuevos' },
			{ f: 'fh108/06-bedroom-1', en: 'Bedroom', es: 'Habitación' },
			{ f: 'fh108/07-bedroom-2', en: 'Bedroom', es: 'Habitación' },
			{ f: 'fh108/08-bedroom-3', en: 'Bedroom', es: 'Habitación' },
			{ f: 'fh108/09-bath-1-vanity', en: 'Bathroom vanity', es: 'Tocador del baño' },
			{ f: 'fh108/10-bath-1-tub', en: 'Bathroom with tub and shower', es: 'Baño con tina y regadera' },
			{ f: 'fh108/11-bath-2', en: 'Second bathroom with walk-in shower', es: 'Segundo baño con regadera' },
			{ f: 'fh108/12-hall', en: 'Hallway', es: 'Pasillo' }
		]
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

export const listingById = (id) => listings.find((h) => h.id === id);
export const photoLarge = (p) => `/photos/${p.f}.jpg`;
export const photoSmall = (p) => `/photos/${p.f}-sm.jpg`;
