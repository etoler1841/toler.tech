import { sendMail } from '$util/mail.js'

export const actions = {
	contact: async ({ request }) => {
		const data = await request.formData()

		const name = data.get('name')
		const email = data.get('email')
		const subject = data.get('subject')
		const message = data.get('message')

		if (!name || !email || !subject || !message) {
			return {
				error: true,
			}
		}

		sendMail({
			replyTo: `"${name.toString()}" <${email.toString()}>`,
			subject: subject.toString(),
			text: message.toString(),
		})
	},
}
