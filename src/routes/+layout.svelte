<script lang="ts">
	import Header from './Header.svelte'
	import Navigation from './Navigation.svelte'
	import Footer from './Footer.svelte'
</script>

<div class="layout-wrapper">
	<Header />
	<Navigation />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout-wrapper {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'header header' 'nav main' '. main' 'footer footer';
	}

	main {
		grid-area: main;
		padding: 1.5rem 2.25rem;
	}
</style>
