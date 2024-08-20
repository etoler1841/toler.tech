---
title: 'Welcome to the Jungle: Building My Personal Site with Svelte'
description: Challenging myself to build a new site in a new framework.
date: 08-12-2024
tags: [Svelte, SvelteKit]
published: true
---

<script lang="ts">
  import ContactForm from '$lib/ContactForm.svelte'
</script>

This site began as a personal challenge borne of necessity.

I've been sitting on this domain for a couple of years now, and I've spent the entire time telling myself that I'll
eventually build a portfolio, or a blog, or something to park here. Unfortunately, I've never made the time to do any of
that &mdash; I don't really blog, and all of my coding projects end up being proprietary work for someone else that I
can't share. So, with no blog posts and no projects, what even goes here?

Well, I've reached a point where I need to have something to show for all the hours of blood, sweat, and literal tears
I've poured into my coding journey, so the time finally came to create some kind of content. So, for lack of a more
substantial body of work, I realized I could go meta: the site itself, and the story of its creation, _is_
the content!

Although this post is a very brief, very glossy overview of the process, I expect I'll milk the experience for all it's
worth in future posts. If you have specific questions about the process you'd like me to cover more in-depth, please
feel free to reach out using the contact form below!

## New Horizons

I could've built this site in Next.js, which is my go-to framework for most of my projects. But if I were just using the
same technology all over again, there wouldn't be a story. I wouldn't have _learned_ anything. It would've been just
another project to set and forget, which isn't what you might call a motivational goal. But then I considered that there
are a lot of other options out there:

- I could force myself to write in vanilla HTML, CSS, and TypeScript. I've done it many, many, many times before, but
  it's been a while, and I might have some new tricks to employ.
- I could check Vue out. It doesn't get the hype it used to, but the ecosystem still seems strong, and it's got enough
  industry presence to be wortwhile.
- I could try out Astro or Remix. I frankly don't think I know nearly enough about those frameworks, and they don't seem
  to be going away, so they're probably worth exploring.

But, honestly, I think I knew where this project was heading all along. In the end, I turned my attention to the latest
hotness, the apple of seemingly everyone's eye, Svelte.

## Modest, Much?

It's a bold move to call your framework "slender and elegant," but in my experience so far, I'm happy to report that
Svelte seems to be living up to the name. Coming from a React background, I'm used to my components being a little
verbose. Especially in TypeScript, even a simple card component can manage to look sort of cryptic to the non-React dev:

```tsx
// card.tsx

import { ComponentProps, PropsWithChildren, useMemo } from 'react'

import styles from '@/styles/card.module.css'

interface Props extends ComponentProps<'div'> {
	title?: string
}

export const Card = ({ children, title }: PropsWithChildren<Props>) => {
	return (
		<div className={styles.card}>
			{!!title && <h3 className={styles.title}>{title}</h3>}
			{children}
		</div>
	)
}
```

And notice that we're importing a CSS module; React seems universally hellbent against forcing any particular tooling,
and Next doesn't give us much more when it comes to CSS. Sure, we can bring in a CSS-in-JS library, or we can install
Tailwind (hard pass, thanks &mdash; that's today's hot take), but out of the box, Next gives us CSS modules.

```css
/* @/styles/card.module.css */

.card {
	color: black;
	padding: 1.6rem;
	background: #cedbdf;
	box-shadow: 0 0 30px 8px rgba(0, 0, 0, 0.3);
}

.card:has(.title) {
	padding-top: 0.8rem;
}

.title {
	text-align: center;
	padding-bottom: 0.6em;
}
```

And honestly? This is fine! It gets the job done, and it's comfortable for me. But it definitely feels a little clunky
in 2024. I mean, the `{!!title && ...}` is an absolute workhorse in React land, but I don't think anyone has ever said
it feels slick or &mdash; dare I say it? &mdash; _svelte_. I'm not saying I don't want to write this code anymore,
but...

```html
<script lang="ts">
	export let title: string
</script>

<div class="card">
	{#if title}
	<h3 class="title">{title}</h3>
	{/if}
	<slot />
</div>

<style>
	.card {
		color: black;
		padding: 1.6rem;
		background: #cedbdf;
		box-shadow: 0 0 30px 8px rgba(0, 0, 0, 0.3);
	}

	.card:has(.title) {
		padding-top: 0.8rem;
	}

	.title {
		text-align: center;
		padding-bottom: 0.6em;
	}
</style>
```

Is this objectively better? I don't think so. I think it's completely valid to prefer the React syntax, and honestly,
as a React fangirl, I'm not totally sure which one I like better. But there's something to be said for cleanliness and
simplicity, and I don't think you can get a whole lot cleaner or simpler than what Svelte brings to the table in this
example.

## The Clock is Ticking

I felt a lot less intimidated at learning a new framework once I saw how streamlined Svelete looks in comparison to
React, but I still had a different fear bubbling up inside of me. See, I'm not one to do anything halfway, which is
often not as beneficial as it sounds; that _modus operandi_ has led me to a lot of dead ends and half-finished projects,
both within code and beyond, and trying to build a portfolio site with very little content and a brand new framework
was, without a doubt, setting me up to fall into that same trap again. So I added a little bit of an extra challenge: I
gave myself 48 hours to code it up and push it live. It didn't need to be perfect &mdash; it needed to be _done_.

## Diving In

As much as I love reinventing the wheel, I knew better than to try to work everything out from scratch in this project.
48 hours didn't give me much time to work with, especially since it wasn't even a 48 hours with little else going on.
All told, I probably only had about 12-14 actual coding hours, and in that time, I had to tackle all of the following:

- Build out the UI, including layout and components
- Create route handlers for displaying blog posts, which are stored in the repo as Markdown files
- Create a separate route handler for handling contact form submissions
- Write the content for the intial launch, including this blog post
- Deploy the site to DigitalOcean

So. No time for perfection, and in some places, we might even be stretching it for "good."

I'm not a hero in this story, nor should any good developer be one: I had the internet at my fingertips, and I was going
to use it. I was determined not to simply copy and paste anyone's code, but I had no qualms whatsoever about referring
to outside codebases and other resources. In particular, I leaned on the
[Syntax.fm website](https://github.com/syntaxfm/website) for inspiration on project structure and
[this post from JoyOfCode](https://joyofcode.xyz/sveltekit-markdown-blog) for working out how to read in my Markdown
files and turn them into a usable blog.

The biggest hurdle in the whole project ended up being, of all things, the contact form handler! I've sent countless
emails from Node, no problem; the trouble is that in the past, they've always been for my day job, and my day job uses
Microsoft 365 for our email provider, whereas I use Google Workspaces. While I absolutely believe I could've worked this
out using Nodemailer, by the time I started on the form handler, I could already hear the clock ticking loudly in my
ear, so I decided to punt and use a mail service instead. My first thought was SendGrid, but for some reason, they
auto-denied my account registration and won't give me a reason? So I ended up on Brevo instead, and I was able to get
it running smoothly in a matter of minutes. I plan to revisit the Google route, via either Nodemailer or the Google API
directly, but for now, Brevo is getting the job done.

## Conclusion

As I put the finishing touches on this blog post (which is likely to get revised, but it's been a long day), I'm
feeling a sense of pride. There's a _lot_ left to do here, but I've got something to show for a few hours of work
stretched over the last two days. I'm excited to see what comes next for this site &mdash; some more dev blogging for
sure, as well as a few projects for a portfolio, I hope &mdash; but in the meantime, at least I _have_ a website now.

I'd love to hear your thoughts! I might ultimately add a comment section, but for the time being, feel free to reach
out using the contact form below (or on the homepage) or via email at [erin@toler.tech](mailto:erin@toler.tech). I've
also got the code for this site open sourced on [GitHub](https://github.com/etoler1841/toler.tech), so feel free to take
a look there and, if you're feeling really generous, submit a pull request!

<ContactForm />
