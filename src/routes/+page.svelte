<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import { page } from '$app/stores';
	import Ex002DataBehind from '$lib/components/examples/Ex002DataBehind.svelte';
	import Ex003IntervalCount from '$lib/components/examples/Ex003IntervalCount.svelte';
	import Ex004UpdateArray from '$lib/components/examples/Ex004UpdateArray.svelte';
	import { PUBLIC_SITE_ENV } from '$env/static/public';
	import Ex005UniversalReactivity from '$lib/components/examples/Ex005UniversalReactivity.svelte';
</script>

<main class="p-6">
	<h1 class="text-3xl">sveltekit5-showcase</h1>
	<p>
		[<a
			href="https://github.com/edwardtanguay/sveltekit5-showcase"
			target="_blank"
			class="underline">repo</a
		>] [<a href="https://sveltekit5-showcase.vercel.app" target="_blank" class="underline"
			>live site</a
		>]
	</p>

	<Example title="Ex001" idCode="Ex001Button">
		<Ex001Button />
	</Example>

	<Example title="Ex002" publish={false}>
		<Ex002DataBehind />
	</Example>

	{#if PUBLIC_SITE_ENV === 'develop'}
		<div class="mt-4">{@html $page.data.content}</div>
	{/if}

	<Example title="Ex003" idCode="Ex003IntervalCount">
		<Ex003IntervalCount />
	</Example>

	<Example title="Ex004" idCode="Ex004UpdateArray">
		<Ex004UpdateArray />
	</Example>

	<Example title="Ex005: Universal Reactivity" idCode="Ex005UniversalReactivity">
		<Ex005UniversalReactivity />
	</Example>
</main>
