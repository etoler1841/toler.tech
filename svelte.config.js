import { escapeSvelte, mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { getSingletonHighlighter } from 'shiki'
import remarkGfm from 'remark-gfm'

/** @type {import('shiki').BundledLanguage[]} */
const langs = [
	'bash',
	'css',
	'docker',
	'dockerfile',
	'html',
	'javascript',
	'php',
	'sql',
	'svelte',
	'tsx',
	'typescript',
]

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getSingletonHighlighter({
				themes: ['rose-pine'],
				langs,
			})
			await highlighter.loadLanguage(...langs)
			const html = escapeSvelte(await highlighter.codeToHtml(code, { lang, theme: 'rose-pine' }))
			return `{@html \`${html}\` }`
		},
	},
	remarkPlugins: [remarkGfm],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$content: 'src/content',
			$util: 'src/util',
		},
	},

	extensions: ['.svelte', '.md'],
}

export default config
