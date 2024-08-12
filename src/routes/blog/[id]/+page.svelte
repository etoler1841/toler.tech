<script lang="ts">
	import formatDate from '$util/formatDate.js'

	export let data
</script>

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
