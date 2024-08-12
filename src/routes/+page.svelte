<script lang="ts">
	import Section from '$lib/Section.svelte';
</script>

<!-- All of the content here should be imported from Markdown/MDsveX files. -->
<Section title="About">
	<p>Hi there! 👋</p>
	<p>
		I’m Erin! I’m a self-taught web developer from Pensacola, Florida, who specializes in JavaScript
		and PHP (WordPress) development. In my day job, I work at a local music as a solo developer, but
		I also occasionally take on interesting contract projects for local companies.
	</p>
	<p>
		I’m also a semi-professional trumpet player, private brass teacher, and former public school
		band director. I graduated from the University of West Florida in 2013 with a dual Bachelor’s
		degree in Music and Music Education.
	</p>
</Section>

<Section title="Uses">
	<Section title="Languages & Frameworks" level={3}>
		<ul>
			<li>
				Whenever I can, I’m working in TypeScript.
				<ul>
					<li>My preferred front-end framework is React.</li>
					<li>I’m also dipping into Svelte, which is what I used to build this site.</li>
					<li>
						I’m comfortable working with vanilla JS as well, and I can jump into a project that’s
						still running jQuery pretty easily, too.
					</li>
					<li>
						On the back-end, I use Node for my runtime, although I want to see what some of the
						newer alternatives have to offer soon.
					</li>
					<li>
						For writing a web server, I’ve historically used Express. I think I’m done with it
						though, and next time I need a standalone web server, I’ll probably use Hono.
					</li>
					<li>
						I’ve been using Next.js for the last couple of years for all my full-stack JS apps, and
						I’ve used it at least once strictly as a web server.
					</li>
					<li>
						I’ve written 90% of an app in Electron. This will probably be my first and last foray
						into Electron, as Tauri looks more interesting to me.
					</li>
				</ul>
			</li>
			<li>
				I’m also comfortable in PHP. It was my first language, so it will always hold a special
				place in my heart.
				<ul>
					<li>
						I started writing PHP back in about 2015. At the time, my focus was on hacky patches and
						tooling for ZenCart, none of which followed any kind of best practices.
					</li>
					<li>
						I still write PHP pretty often, but it’s in the context of WordPress themes and plugins.
						I especially work a lot in WooCommerce.
					</li>
					<li>
						I’ve also built a couple of apps in Symfony and Laravel. I liked using both, but I still
						prefer something like Next.js whenever possible.
					</li>
				</ul>
			</li>
			<li>
				I’ve worked pretty equally in relational and document databases (mostly MySQL and MongoDB).
				<ul>
					<li>I’ve recently started exploring Supabase and I really like it.</li>
					<li>
						I’ve been forced to work with MSSQL throughout my career. I am not a fan of the
						Transact-SQL syntax, but I can use it if I have to.
					</li>
				</ul>
			</li>
			<li>
				I’ve built a single automation system in NetLinx. It was a neat experience and I would do it
				again, even though I have complaints about the tooling and some of the language conventions.
			</li>
			<li>
				I’ve dabbled in Python, Go, Rust, and C#. I’m certainly not an expert in any of them, but
				I’m interested in learning more!
			</li>
		</ul>
	</Section>
	<Section title="Editor" level={3}>
		<ul>
			<li>
				I’m a Visual Studio Code devotee. I converted early on in my coding journey (late 2018) and
				haven’t looked back.
				<ul>
					<li>
						For my theme, I use my own Jade theme, which is a fork of Wes Bos’s Cobalt 2 but green.
					</li>
					<li>
						Victor Mono is my font of choice, mostly because its cursive variant is also monospace,
						which makes docblocks way easier to format. I want to make GitHub's Monaspace work, but
						there are still some weird little issues I haven't been able to get past.
					</li>
					<li>
						I use a gazillion extensions, but the ones I most highly recommend are Better Comments,
						Codeium, PHP, TypeScript Import Sorter, VS Sequential Number, WordPress Hooks
						Intellisense, and WordPress Snippets.
					</li>
				</ul>
			</li>
		</ul>
	</Section>
	<Section title="OS" level={3}>
		<ul>
			<li>
				I’m comfortable in Windows, Mac, and Linux environments, but my primary workstations are all
				Windows machines. I do own a 2020 MacBook Pro, but I really hate the feel of the keyboard,
				so I almost never use it. Windows does what I need it to. 🤷‍♀️
			</li>
		</ul>
	</Section>
	<Section title="Other Apps" level={3}>
		<ul>
			<li>
				Firefox is my daily driver. Maybe I’ll eventually switch back to Chrome, but I’ve always had
				performance issues with it, which is why I switched several years ago.
			</li>
			<li>
				I don’t pride myself on my UI/UX design skills, but when I do work in that space (like I did
				for this site!), I work in Figma.
			</li>
			<li>
				Similarly, I don’t do a lot of graphic design, but when I do, I typically use Inkscape.
			</li>
		</ul>
	</Section>
</Section>

<Section title="Blog">[INSERT BLOG POSTS HERE]</Section>

<Section title="Contact">
	<p>
		I’m not currently taking on any new client work; however, if you have any questions, still feel
		free to reach out to me! Fill out the form below, or just email me at erin@toler.tech.
	</p>
	<p>[INSERT CONTACT FORM HERE]</p>
</Section>
