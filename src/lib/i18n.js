import { writable } from 'svelte/store';

const initial =
	typeof localStorage !== 'undefined'
		? localStorage.getItem('lang') || 'en'
		: 'en';

export const lang = writable(initial);

lang.subscribe((v) => {
	if (typeof localStorage !== 'undefined') localStorage.setItem('lang', v);
	if (typeof document !== 'undefined') document.documentElement.lang = v;
});

/** pick('English', 'Español') → current-language string */
export function pickFactory($lang) {
	return (en, es) => ($lang === 'es' ? es : en);
}
