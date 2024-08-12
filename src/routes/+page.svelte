<script lang="ts">
	import loadMarkdown from '$util/markdown'
	import Section from '$lib/Section.svelte'
</script>

{#each ['about', 'uses', 'blog', 'contact'] as slug}
	<Section>
		{#await loadMarkdown(slug) then data}
			<h2 id={slug}>{data?.meta?.title}</h2>
			<svelte:component this={data?.content} />
		{/await}
	</Section>
{/each}
