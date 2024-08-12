<script lang="ts">
	export let title: string
	export let id: string = title.toLowerCase().replace(' ', '-')
	export let level: number = 2
</script>

<section {id} class="section">
	<svelte:element this={`h${level}`} class="section-title">{title}</svelte:element>
	<slot />
</section>
