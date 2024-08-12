<script lang="ts">
	export let href: string
	export let label: string
</script>

<li class="nav-item">
	<a {href} class="h6 nav-link">{label}</a>
</li>

<style>
	.nav-link {
		font-family: var(--font-family--title);
		color: var(--color--white);
		text-decoration: none;
	}

	li::before {
		content: '🖤';
		margin-right: 0.5em;
	}
</style>
