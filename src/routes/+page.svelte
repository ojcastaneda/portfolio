<script lang="ts">
	import Project from '$lib/components/project.svelte';
	import personal from '$lib/data/personal';
	import projects from '$lib/data/projects';
	import skills from '$lib/data/skills';
	import * as m from '$lib/paraglide/messages.js';
</script>

<h1 class="mb-5 scroll-mt-20 text-center text-5xl" id="about-me">{m.about_me()}</h1>
<section class="m-auto w-5/6 items-center justify-center md:flex lg:w-3/4">
	<div class="avatar m-auto flex justify-center text-center">
		<div class="w-100 rounded-full md:w-35 lg:w-50">
			<img src="/profile.png" alt={personal.name} />
		</div>
	</div>
	<p class="mt-4 h-fit rounded bg-base-300 p-4 text-justify shadow-sm md:my-auto md:ml-4">
		{m['data.about_me']({ name: personal.name })}
	</p>
</section>
<h1 class="my-5 scroll-mt-20 text-center text-5xl" id="projects">{m.projects()}</h1>
<section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as project}
		<Project {project}></Project>
	{/each}
</section>
<h1 class="my-5 scroll-mt-20 text-center text-5xl" id="skills">{m.skills()}</h1>
<section class="m-auto flex w-3/4 flex-wrap justify-center gap-4">
	{#each skills.toSorted() as skill}
		<div class="rounded bg-secondary px-4 py-2 shadow">
			{skill}
		</div>
	{/each}
</section>
