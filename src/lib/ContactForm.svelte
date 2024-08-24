<script lang="ts">
	import Button from './Button.svelte'
	import Input from './Input.svelte'
</script>

<form action="?/contact" method="post" class="contact-form">
	<Input id="name" name="name" label="Your Name" required />
	<Input id="email" name="email" label="Email" type="email" required />
	<Input id="subject" name="subject" label="Subject" required />
	<Input id="message" name="message" label="Message" type="textarea" required />

	<Button type="submit" label="Submit" />
</form>

<style>
	.contact-form {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.8em;
		max-width: 500px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.contact-form {
			margin-inline: auto;
		}
	}
</style>
