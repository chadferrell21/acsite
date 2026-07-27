import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: null }),
		prerender: { handleHttpError: 'warn' }
	}
};

export default config;
