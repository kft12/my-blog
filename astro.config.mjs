// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://scallion-tea.pages.dev',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/': '/blog/', // index → /blog にリダイレクト
	},
});
