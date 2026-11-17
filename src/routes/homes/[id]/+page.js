import { listings, listingById } from '$lib/data/listings.js';
import { error } from '@sveltejs/kit';

export function entries() {
	return listings.map((h) => ({ id: h.id }));
}

export function load({ params }) {
	const home = listingById(params.id);
	if (!home) throw error(404, 'No such home');
	return { home };
}
