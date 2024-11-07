<script lang="ts">
	import { store } from '../../../stores/store.svelte';
	let nums = $state([1, 2, 3, 4, 5]);
	let total = $derived(nums.reduce((t, n) => t + n));

	const add = () => {
		nums.push(nums.length + 1);
	};
</script>

<section class="flex w-[20rem] flex-col items-center">
	<div class="mb-3" style="color: {store.theme === 'dark' ? '#0288D1' : '#B3E5FC'}">
		Theme is: {store.theme}
	</div>
	<div class="flex gap-5">
		<button type="button" onclick={() => add()} class="variant-filled-primary btn">Add</button>
	</div>
	<p class="mb-3 mt-3 text-xl text-warning-500">{nums.join(', ')}</p>
	<p class="text-xl">total = <span class="text-warning-500">{total}</span></p>
</section>
