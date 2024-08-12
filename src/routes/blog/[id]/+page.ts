import loadMarkdown from '$util/markdown'

export async function load({ params }) {
	const post = await loadMarkdown(params.id, 'blog')

	return post
}
