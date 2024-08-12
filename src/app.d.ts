// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Post {
			title: string
			slug: string
			description: string
			date: string
			tags: string[]
			published: boolean
		}
	}
}

export {}
