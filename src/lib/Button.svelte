<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button'
	export let label: string
</script>

{#if type === 'button'}
	<button on:click>{label}</button>
{:else}
	<input {type} value={label} on:click />
{/if}
