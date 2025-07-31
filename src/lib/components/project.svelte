<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import * as m from '$lib/paraglide/messages.js';

	const { project }: { project: Project } = $props();
</script>

<div class="relative flex flex-wrap items-start gap-4">
	<div class="card w-full bg-base-300 p-3 shadow-sm">
		<figure class="mb-3 h-20">
			<img src={project.image} alt={project.name} class="h-full w-auto object-contain" />
		</figure>
		<div class="card-body p-0 text-justify">
			<h2 class="card-title justify-center">{project.name}</h2>
			<p>{(m[`data.${project.id}` as keyof typeof m] as () => string)()}</p>
			<div class="card-actions flex-wrap justify-center">
				{#each project.skills.toSorted() as skill}
					<div class="rounded bg-secondary px-4 py-2 shadow">{skill}</div>
				{/each}
			</div>
			<div class="card-actions justify-center text-2xl">
				{#each project.urls as { icon: Icon, url }}
					<a href={url} target="_blank" rel="noopener noreferrer"><Icon /></a>
				{/each}
			</div>
		</div>
	</div>
	<span class="absolute top-2 right-2 rounded-3xl bg-neutral px-3 py-1 text-sm shadow">
		{m[project.source]()}
	</span>
</div>
