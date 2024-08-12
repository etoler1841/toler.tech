<script lang="ts">
	import Header from './Header.svelte'
	import Navigation from './Navigation.svelte'
	import Footer from './Footer.svelte'
</script>

<Header />
<Navigation />
<main>
	<slot />
</main>
<Footer />
