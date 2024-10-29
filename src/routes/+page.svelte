<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import { page } from '$app/stores';
	import Ex002DataBehind from '$lib/components/examples/Ex002DataBehind.svelte';
	import Ex003IntervalCount from '$lib/components/examples/Ex003IntervalCount.svelte';
</script>

<main class="p-6">
	<h1 class="text-3xl">sveltekit5-showcase</h1>

	<Example title="Test 001">
		<Ex001Button />
	</Example>

	<Example title="Test 002">
		<Ex002DataBehind/>
	</Example>
	<div class="mt-4">{@html $page.data.content}</div>

	<Example title="Test 003">
		<Ex003IntervalCount/>
	</Example>
</main>
