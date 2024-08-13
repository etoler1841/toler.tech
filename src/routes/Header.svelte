<header class="page-header">
	<div class="container">
		<h1 class="title">Erin Toler</h1>
		<p class="subtitle">musician • teacher • techie</p>
	</div>
</header>

<style>
	.page-header {
		width: 100%;
		padding: 2.25rem 1.5rem;
		grid-area: header;
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}

	.container {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}

	.subtitle {
		font-family: var(--font-family--title);
		color: var(--color--accent);
	}

	@media (max-width: 768px) {
		.page-header {
			justify-content: center;
			text-align: center;
			padding: 1.5rem 0.75rem;
		}

		.subtitle {
			font-size: 0.8rem;
		}
	}
</style>
