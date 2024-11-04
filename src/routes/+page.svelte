<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import { page } from '$app/stores';
	import Ex002IntervalCount from '$lib/components/examples/Ex002IntervalCount.svelte';
	import Ex003UpdateArray from '$lib/components/examples/Ex003UpdateArray.svelte';
	import Ex004UniversalReactivity from '$lib/components/examples/Ex004UniversalReactivity.svelte';
	import Ex005SvelteStores from '$lib/components/examples/Ex005SvelteStores.svelte';
</script>

<div class="flex flex-wrap gap-3 -mt-3">
	<Example title="Ex001: Interactive Button" idCode="Ex001Button">
		<Ex001Button />
	</Example>

	<Example title="Ex002: Interval Count" idCode="Ex002IntervalCount">
		<Ex002IntervalCount />
	</Example>

	<Example title="Ex003: Update Array" idCode="Ex003UpdateArray">
		<Ex003UpdateArray />
	</Example>

	<Example title="Ex004: Universal Reactivity" idCode="Ex004UniversalReactivity">
		<Ex004UniversalReactivity />
	</Example>

	<Example title="Ex005: Svelte Stores" idCode="Ex003UpdateArray">
		<Ex005SvelteStores/>
	</Example>
</div>
