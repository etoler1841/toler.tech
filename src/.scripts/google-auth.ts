import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	process.env.GOOGLE_REDIRECT_URL
)

const scopes = [
	'https://mail.google.com/',
	'https://www.googleapis.com/auth/gmail.modify',
	'https://www.googleapis.com/auth/gmail.compose',
	'https://www.googleapis.com/auth/gmail.send',
]

const url = oauth2Client.generateAuthUrl({
	scope: scopes,
})

console.log(`Open this URL in your browser: ${url}`)
