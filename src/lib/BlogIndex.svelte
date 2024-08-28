<script lang="ts">
	import formatDate from '$util/formatDate'

	export let tag: string | undefined

	async function loadPosts() {
		const paths = import.meta.glob('$content/blog/*.md', { eager: true })

		return Object.keys(paths)
			.reduce((acc, path) => {
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
			.filter((post) =>
				tag ? post.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase()) : post
			)
			.sort((a, b) => {
				return new Date(b.date).valueOf() - new Date(a.date).valueOf()
			})
	}
</script>

{#await loadPosts() then posts}
	{#if posts.length}
		<ul>
			{#each posts.slice(0, 5) as post}
				<li><a href="/blog/{post.slug}">{post.title}</a> - {formatDate(post.date)}</li>
			{/each}
		</ul>
		{#if posts.length > 5}
			<a href="/blog">View all</a>
		{/if}
	{:else}
		<p>No posts found!</p>
	{/if}
{/await}
