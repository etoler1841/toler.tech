<script lang="ts">
	import BlogIndex from '$lib/BlogIndex.svelte'
	import { formatPageTitle } from '$util/formatPageTitle'
	import { page } from '$app/stores'

	const title = formatPageTitle(`Blog Archive (Tag: ${decodeURIComponent($page.params.tag)})`)
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={`Blog posts matching the tag "${$page.params.tag}".`} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={`https://toler.tech/blog/tag/${$page.params.tag}`} />
</svelte:head>

<div class="content">
	<hgroup>
		<h1>Blog Archive</h1>
		<p>Posts tagged <a href={$page.url.pathname}>{$page.params.tag}</a></p>
	</hgroup>
	<BlogIndex tag={$page.params.tag} />
</div>
