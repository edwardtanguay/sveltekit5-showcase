<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import { page } from '$app/stores';
	import Ex002IntervalCount from '$lib/components/examples/Ex002IntervalCount.svelte';
	import Ex003UpdateArray from '$lib/components/examples/Ex003UpdateArray.svelte';
	import Ex004UniversalReactivity from '$lib/components/examples/Ex004UniversalReactivity.svelte';
</script>

<main class="p-6">
	<h1 class="text-3xl">{$page.data.content}</h1>
	<p>
		[<a
			href="https://github.com/edwardtanguay/sveltekit5-showcase"
			target="_blank"
			class="underline">repo</a
		>] [<a href="https://sveltekit5-showcase.vercel.app" target="_blank" class="underline"
			>live site</a
		>]
	</p>

	<div class="flex flex-wrap gap-3">
		<Example title="Ex001" idCode="Ex001Button">
			<Ex001Button />
		</Example>

		<Example title="Ex002" idCode="Ex002IntervalCount">
			<Ex002IntervalCount />
		</Example>

		<Example title="Ex003" idCode="Ex003UpdateArray">
			<Ex003UpdateArray />
		</Example>

		<Example title="Ex004: Universal Reactivity" idCode="Ex004UniversalReactivity">
			<Ex004UniversalReactivity />
		</Example>
	</div>
</main>
