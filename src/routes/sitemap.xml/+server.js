// The list of pages for search engines, built from the same data the
// pages use, so a new home or community appears here on the next build.
import { site } from '$lib/site.js';
import { listings } from '$lib/data/listings.js';
import { parks } from '$lib/data/parks.js';

export const prerender = true;

export function GET() {
	const base = `https://${site.domain}`;
	const paths = [
		'/',
		'/homes',
		...listings.map((h) => `/homes/${h.id}`),
		...parks.map((p) => `/parks/${p.slug}`),
		'/apply',
		'/contact',
		'/news'
	];
	const body =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
		paths.map((p) => `  <url><loc>${base}${p}</loc></url>\n`).join('') +
		'</urlset>\n';
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
