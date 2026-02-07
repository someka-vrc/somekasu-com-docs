// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.somekasu.com/',
	integrations: [
		starlight({
			title: 'そめか屋',
			favicon: '/favicon.ico',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Top',
					autogenerate: { directory: 'top' },
				},
				{
					label: 'Mofufuku',
					autogenerate: { directory: 'mofufuku' },
				},
			],
		}),
	],
});
