<script lang="ts">
	import loadMarkdown from '$util/markdown'
	import Section from '$lib/Section.svelte'
	import { formatPageTitle } from '$util/formatPageTitle'

	const title = formatPageTitle('Erin Toler')
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Erin Toler is a fullstack web developer living in Pensacola, Florida."
	/>
	<meta property="og:title" content={title} />
	<meta property="og:url" content="https://toler.tech/" />
</svelte:head>

{#each ['about', 'uses', 'blog', 'contact'] as slug}
	<Section>
		{#await loadMarkdown(slug) then data}
			<h2 id={slug}>{data?.meta?.title}</h2>
			<svelte:component this={data?.content} />
		{/await}
	</Section>
{/each}
