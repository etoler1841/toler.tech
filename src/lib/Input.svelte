<script lang="ts">
	export let id: string
	export let name: string
	export let label: string
	export let value: string = ''
	export let type = 'text'
	export let required = false

	let hasBeenFocused = false
	const handleBlur = () => (hasBeenFocused = true)
</script>

<div class={'input-group' + (!hasBeenFocused ? ' prevent-flag' : '')}>
	<label for={id}>{label}</label>
	{#if type === 'textarea'}
		<textarea {id} {name} {value} {required} on:blur={handleBlur} />
	{:else}
		<input {id} {name} {type} {value} {required} on:blur={handleBlur} />
	{/if}
</div>

<style>
	.input-group {
		display: flex;
		flex-flow: column nowrap;

		&:not(.prevent-flag):has(:invalid:not(:focus-visible)) {
			& input,
			& textarea {
				outline: 1px solid red;
			}

			& label::after {
				content: '×';
				color: red;
				margin-inline-start: 4px;
				font-weight: bold;
			}
		}
	}

	textarea {
		min-height: 7.5em;
	}
</style>
