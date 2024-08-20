import { error } from '@sveltejs/kit'

// We have to use the `directory` param because of how rollup handles dynamic imports.
// @see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#how-it-works
export default async function loadMarkdown(slug: string, directory?: string) {
	try {
		const post = await import(
			directory ? `$content/${directory}/${slug}.md` : `$content/${slug}.md`
		)

		return {
			content: post.default,
			meta: { ...post.metadata, slug },
		}
	} catch (e) {
		if (e instanceof Error) {
			error(500, e.message)
		} else {
			console.error(e)
		}
	}
}
