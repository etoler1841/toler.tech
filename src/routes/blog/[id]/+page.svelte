<script lang="ts">
	import formatDate from '$util/formatDate.js'
	import { formatPageTitle } from '$util/formatPageTitle.js'

	export let data

	const title = formatPageTitle(data.meta.title)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={`https://toler.tech/blog/${data.meta.slug}`} />
</svelte:head>

<article>
	<h1>{data.meta.title}</h1>
	<p class="meta small">Published {formatDate(data.meta.date)}</p>

	<svelte:component this={data.content} />

	<p class="meta small">Tags: {data.meta.tags.join(', ')}</p>
</article>

<style>
	.meta {
		font-style: italic;
		color: var(--color--accent);
	}
</style>
