export default function formatDate(date: string) {
	const d = new Date(date)
	return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
