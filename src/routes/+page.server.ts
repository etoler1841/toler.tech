export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData()

		// TODO: Actually do something with this submission.
		console.log(data)
	},
}
