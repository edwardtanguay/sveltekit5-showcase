<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import { page } from '$app/stores';
	import Ex002DataBehind from '$lib/components/examples/Ex002DataBehind.svelte';
	import Ex003IntervalCount from '$lib/components/examples/Ex003IntervalCount.svelte';
	import Ex004UpdateArray from '$lib/components/examples/Ex004UpdateArray.svelte';
	import { PUBLIC_SITE_ENV } from '$env/static/public';
</script>

<main class="p-6">
	<h1 class="text-3xl">sveltekit5-showcase</h1>
	<p>[<a href="nnn" target="_blank" class="underline">repo</a>] [<a href="nnn" target="_blank" class="underline">live site</a>]</p>

	<Example
		title="Test 001"
		url="https://github.com/edwardtanguay/sveltekit5-showcase/blob/dev/src/lib/components/examples/Ex001Button.svelte"
	>
		<Ex001Button />
	</Example>

	<Example title="Test 002">
		<Ex002DataBehind />
	</Example>

	{#if PUBLIC_SITE_ENV === 'develop'}
		<div class="mt-4">{@html $page.data.content}</div>
	{/if}

	<Example
		title="Test 003"
		url="https://github.com/edwardtanguay/sveltekit5-showcase/blob/dev/src/lib/components/examples/Ex003IntervalCount.svelte"
	>
		<Ex003IntervalCount />
	</Example>

	<Example
		title="Test 004"
		url="https://github.com/edwardtanguay/sveltekit5-showcase/blob/dev/src/lib/components/examples/Ex004UpdateArray.svelte"
	>
		<Ex004UpdateArray />
	</Example>
</main>
