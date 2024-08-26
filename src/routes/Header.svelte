<script lang="ts">
	import { page } from '$app/stores'

	$: level = $page.url.pathname === '/' ? 'h1' : 'h2'
</script>

<header class="page-header">
	<div class="container">
		<svelte:element this={level} class="title"><a href="/">Erin Toler</a></svelte:element>
		<p class="subtitle">musician • teacher • techie</p>
	</div>
</header>

<style>
	.page-header {
		width: 100%;
		padding: 2.25rem 1.5rem;
		grid-area: header;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.container {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}

	.title {
		font-size: 3rem;
	}

	.title a {
		color: var(--color--white);

		&:hover,
		&:focus-visible {
			text-decoration: none;
		}
	}

	.subtitle {
		font-family: var(--font-family--title);
		color: var(--color--accent);
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.page-header {
			justify-content: center;
			text-align: center;
			padding: 1.5rem 0.75rem;
		}

		.subtitle {
			font-size: 0.8rem;
		}
	}
</style>
