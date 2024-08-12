import { error } from '@sveltejs/kit'

export default async function loadMarkdown(slug: string) {
	try {
		const post = await import(`$content/${slug}.md`)

		return {
			content: post.default,
			meta: post.metadata,
		}
	} catch (e) {
		if (e instanceof Error) {
			error(500, e.message)
		} else {
			console.error(e)
		}
	}
}
