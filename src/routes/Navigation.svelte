<!--
TODO: There are a lot of ways to improve here.

1) Try to find a way to make popover work without breaking the toggler animation/stacking.
2) If that doesn't work, try implementing modal instead.
3) If THAT doesn't work, implement a better faux-backdrop.
-->

<script lang="ts">
	import { onMount } from 'svelte'
	import NavItem from '$lib/NavItem.svelte'

	let toggler: HTMLButtonElement | null = null
	let navbar: HTMLElement | null = null
	let state: 'open' | 'closed' = 'closed'

	onMount(() => {
		toggler = document.querySelector<HTMLButtonElement>('#toggler')
		navbar = document.querySelector<HTMLElement>('#top-nav')

		window.addEventListener('keydown', handleKeydown)
		window.addEventListener('click', handleBackgroundClick)

		return () => {
			window.removeEventListener('keydown', handleKeydown)
			window.removeEventListener('click', handleBackgroundClick)

			toggler = null
			navbar = null
		}
	})

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault()
			if (state === 'open') {
				toggle()
			}
		}
	}

	function handleBackgroundClick(e: MouseEvent) {
		if (state === 'open' && e.target !== navbar && e.target !== toggler) {
			toggle()
		}
	}

	function toggle() {
		switch (state) {
			case 'closed':
				state = 'open'
				break
			case 'open':
			default:
				state = 'closed'
		}
	}
</script>

<button id="toggler" class="toggler" on:click={toggle} data-state={state}>
	<div class="toggler-icon"></div>
</button>

<nav id="top-nav" data-state={state}>
	<ul class="menu">
		<NavItem href="/#about" label="About" />
		<NavItem href="/#uses" label="Uses" />
		<NavItem href="/#blog" label="Blog" />
		<NavItem href="/#contact" label="Contact" />
	</ul>
</nav>

<style>
	.toggler {
		display: none;
	}

	nav {
		grid-area: nav;
		padding: 1.5rem 2.25rem;
		position: sticky;
		top: 0;
		left: 0;
		margin: 0;
		background: transparent;
		display: block;
		height: fit-content;
	}

	.menu {
		list-style: none;
	}

	@media (max-width: 960px) {
		nav {
			padding-inline: 0.75rem;
		}
	}

	@media (max-width: 768px) {
		.toggler {
			display: block;
			position: fixed;
			top: 1rem;
			left: 1rem;
			z-index: 10;
			cursor: pointer;
			padding: 1rem;
			background-color: var(--color--primary);
			opacity: 0.9;
			border: none;
		}

		.toggler-icon {
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			pointer-events: none;
		}

		.toggler-icon::before {
			translate: 0 -0.4rem;
			opacity: 1;
		}

		.toggler-icon::after {
			translate: 0 0.4rem;
		}

		.toggler-icon::before,
		.toggler-icon::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
		}

		.toggler-icon,
		.toggler-icon::before,
		.toggler-icon::after {
			height: 2px;
			width: 1.5rem;
			background: var(--color--accent);
			display: block;
			transition:
				translate 0.3s ease-out,
				rotate 0.3s ease-out,
				opacity 0.3s ease-out;
		}

		.toggler[data-state='open'] {
			background: transparent;
		}

		.toggler[data-state='open'] .toggler-icon {
			rotate: 135deg;
		}

		.toggler[data-state='open'] .toggler-icon::before {
			translate: 0 0;
			rotate: 180deg;
			opacity: 0;
		}

		.toggler[data-state='open'] .toggler-icon::after {
			translate: 0 0;
			rotate: 270deg;
		}

		.toggler[data-state='open'] .toggler-icon::before,
		.toggler[data-state='open'] .toggler-icon::after {
			content: '';
			position: absolute;
		}

		.toggler[data-state='open'] .toggler-icon,
		.toggler[data-state='open'] .toggler-icon::before,
		.toggler[data-state='open'] .toggler-icon::after {
			height: 3px;
			width: 1.5rem;
			background: var(--color--accent);
			display: block;
			transition: all 0.3s ease-out;
		}

		nav {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			margin-block: 0;
			transition: translate 0.3s ease-out;
			translate: -100% 0;
			background: var(--color--primary);
			width: unset;
			gap: 0;
			text-align: start;
		}

		nav[data-state='open'] {
			translate: 0 0;
			box-shadow:
				3px 0 3px rgba(0, 0, 0, 0.3),
				0 0 100vw rgba(0, 0, 0, 0.3);
		}

		.menu {
			margin-block-start: 2.5rem;
			max-width: 100vw;
			box-shadow: none;
			padding: 1rem 1rem;
		}
	}
</style>
