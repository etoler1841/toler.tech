<script lang="ts">
	export let href: string
	export let label: string
</script>

<a {href} class="h6 nav-link">
	<li class="nav-item">
		{label}
	</li>
</a>

<style>
	.nav-link {
		font-family: var(--font-family--title);
		color: var(--color--white);
		text-decoration: none;
		transition: all 0.2s ease-out;
	}

	.nav-link:hover {
		color: var(--color--light);
	}

	.nav-item {
		padding-block-end: 0.6em;
	}

	.nav-item::before {
		content: '🖤';
		margin-inline-end: 0.5em;
	}
</style>
