import { env } from '$env/dynamic/private'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: 'smtp-relay.brevo.com',
	port: 587,
	secure: false,
	auth: {
		user: env.BREVO_USERNAME,
		pass: env.BREVO_PASSWORD,
	},
})

export async function sendMail(config: nodemailer.SendMailOptions) {
	try {
		const options: nodemailer.SendMailOptions = {
			from: '"Toler.Tech" <erin@toler.tech>',
			to: '"Erin Toler" <erin@toler.tech>',
		}
		Object.assign(options, config)

		return await transporter.sendMail(options)
	} catch (error) {
		console.error(error)
	}
}
