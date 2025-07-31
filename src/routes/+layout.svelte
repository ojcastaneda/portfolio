<script lang="ts">
	import MdiLocation from '~icons/mdi/location';
	import personal from '$lib/data/personal';
	import * as m from '$lib/paraglide/messages.js';
	import '../app.css';

	let { children } = $props();
</script>

<div class="fixed top-0 left-0 z-50 navbar w-full bg-base-300 shadow-sm">
	<div class="navbar-start"></div>
	<div class="navbar-center">
		<ul class="menu menu-horizontal px-1 text-xl">
			<li><a href="#about-me">{m.about_me()}</a></li>
			<li><a href="#projects">{m.projects()}</a></li>
			<li><a href="#skills">{m.skills()}</a></li>
			<li><a href="#contact-me">{m.contact_me()}</a></li>
		</ul>
	</div>
	<div class="navbar-end"></div>
</div>
<main class="mx-auto w-[90%] py-8 pt-20 md:max-w-[80%]">
	{@render children()}
</main>
<footer class="footer flex justify-center bg-base-300 p-4 text-2xl" id="contact-me">
	<nav class="grid-flow-col gap-4">
		{#each personal.socials as { icon: Icon, url }}
			<a href={url}>
				<Icon />
			</a>
		{/each}
		<div class="flex">
			<MdiLocation />
			<p class="text-xl">{personal.location}</p>
		</div>
	</nav>
</footer>
