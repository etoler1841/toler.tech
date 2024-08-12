<script lang="ts">
	import Section from '$lib/Section.svelte';

	import loadMarkdown from '$util/markdown';
</script>

<!-- All of the content here should be imported from Markdown/MDsveX files. -->
{#each ['about', 'uses', 'blog', 'contact'] as slug}
	<section>
		{#await loadMarkdown(slug) then data}
			<h2>{data?.meta?.title}</h2>
			<svelte:component this={data?.content} />
		{/await}
	</section>
{/each}
