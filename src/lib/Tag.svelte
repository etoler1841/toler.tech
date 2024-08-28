<script lang="ts">
	export let tag: string
</script>

<a href="/blog/tag/{tag}" class="tag">{tag}</a>

<style>
	.tag {
		display: inline-block;
		background: var(--color--accent);
		color: var(--color--primary);
		padding: 0 0.5em;
		line-height: 1.5;
		white-space: nowrap;
		border-radius: 20px;
		text-decoration: none;
		transition: all 0.2s ease-out;

		&:hover {
			background: var(--color--light);
		}
	}
</style>
