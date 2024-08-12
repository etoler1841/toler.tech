<script lang="ts">
	async function loadPosts() {
		const paths = import.meta.glob('$content/blog/*.md', { eager: true })

		return Object.keys(paths).reduce((acc, path) => {
			const file = paths[path]
			const slug = path.split('/').at(-1)?.replace('.md', '')

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata as Omit<App.Post, 'slug'>
				const post = { ...metadata, slug }
				if (post.published) {
					acc.push(post)
				}
			}

			return acc
		}, [] as App.Post[])
	}
</script>

{#await loadPosts() then posts}
	{#if posts.length}
		{#each posts as post}
			<a href="/blog/{post.slug}">{post.title}</a>
		{/each}
	{:else}
		<p>No posts found!</p>
	{/if}
{/await}
