<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | 'link' = 'button'
	export let label: string
	export let href: string | undefined = undefined
</script>

{#if type === 'button'}
	<button on:click>{label}</button>
{:else if type === 'link'}
	<a {href} role="button">{label}</a>
{:else}
	<input {type} value={label} on:click />
{/if}

<style>
	button,
	input[type='submit'],
	input[type='reset'],
	a[role='button'] {
		font-family: var(--font-family--title);
		background: var(--color--white);
		color: var(--color--primary);
		border: none;
		padding: 0.25em 0.5em;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		text-align: center;

		&:hover,
		&:focus-visible {
			background: var(--color--light);
		}
	}
</style>
