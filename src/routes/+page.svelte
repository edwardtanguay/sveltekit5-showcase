<script lang="ts">
	import Example from '$lib/components/Example.svelte';
	import Ex001Button from '$lib/components/examples/Ex001Button.svelte';
	import Ex002IntervalCount from '$lib/components/examples/Ex002IntervalCount.svelte';
	import Ex003UpdateArray from '$lib/components/examples/Ex003UpdateArray.svelte';
	import Ex004UniversalReactivity from '$lib/components/examples/Ex004UniversalReactivity.svelte';
	import Ex005StoreWrite from '$lib/components/examples/Ex005StoreWrite.svelte';
	import Ex006StoreRead from '$lib/components/examples/Ex006StoreRead.svelte';
	import Ex007StateDerivedArray from '$lib/components/examples/Ex007StateDerivedArray.svelte';
	import Ex008DollarStateGetSet from '$lib/components/examples/Ex008DollarStateGetSet.svelte';
	import Ex009DollarStateWithoutGetSet from '$lib/components/examples/Ex009DollarStateWithoutGetSet.svelte';
	import Ex010StateArrayPush from '$lib/components/examples/Ex010StateArrayPush.svelte';
	import Ex011SharedState001 from '$lib/components/examples/Ex011SharedState001.svelte';
	import Ex012SharedState002 from '$lib/components/examples/Ex012SharedState002/Ex012SharedState002.svelte';
	import Ex013RuneStore from '$lib/components/examples/Ex013RuneStore.svelte';
	import Ex014RuneStore from '$lib/components/examples/Ex014RuneStore.svelte';
	import Ex015ClassStore001 from '$lib/components/examples/Ex015ClassStore001.svelte';
	import { test001 } from '../tools';

	test001();
</script>

<div class="-mt-3 flex flex-wrap gap-3">
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

	<Example title="Ex005: Svelte Stores" idCode="Ex005StoreWrite">
		<Ex005StoreWrite />
	</Example>

	<Example title="Ex006: Svelte Stores" idCode="Ex006StoreRead">
		<Ex006StoreRead />
	</Example>

	<Example title="Ex007: Update Array with State/Derived" idCode="Ex007StateDerivedArray">
		<Ex007StateDerivedArray />
	</Example>

	<Example title="Ex008: $state() with get/set" idCode="Ex008DollarStateGetSet">
		<Ex008DollarStateGetSet />
	</Example>

	<Example title="Ex009: $state() without get/set (simpler)" idCode="Ex009DollarStateWithoutGetSet">
		<Ex009DollarStateWithoutGetSet />
	</Example>

	<Example title="Ex010: State variables with array.push()" idCode="Ex010StateArrayPush">
		<Ex010StateArrayPush />
	</Example>

	<Example title="Ex011: Shared State 001" idCode="Ex11SharedState001">
		<Ex011SharedState001/>
	</Example>

	<Example title="Ex012: Shared State 002" idCode="Ex12SharedState002">
		<Ex012SharedState002 />
	</Example>

	<Example title="Ex013: Rune Store" idCode="Ex013RuneStore">
		<Ex013RuneStore/>
	</Example>

	<Example title="Ex014: Rune Store" idCode="Ex014RuneStore">
		<Ex014RuneStore/>
	</Example>

	<Example title="Ex015: Class Store 001" idCode="Ex015ClassStore001">
		<Ex015ClassStore001/>
	</Example>
</div>
