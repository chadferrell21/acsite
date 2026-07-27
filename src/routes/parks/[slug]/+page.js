import { parks, parkBySlug } from '$lib/data/parks.js';
import { error } from '@sveltejs/kit';

export function entries() {
	return parks.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
	const park = parkBySlug(params.slug);
	if (!park) throw error(404, 'No such community');
	return { park };
}
