<script lang="ts">
	import NavItem from '$lib/NavItem.svelte'
</script>

<ul class="navbar" role="navigation">
	<NavItem href="#about" label="About" />
	<NavItem href="#uses" label="Uses" />
	<NavItem href="#blog" label="Blog" />
	<NavItem href="#contact" label="Contact" />
</ul>

<style>
	.navbar {
		grid-area: nav;
		padding: 1.5rem 2.25rem;
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5rem;
		list-style: none;
		position: sticky;
		top: 0;
	}
</style>
