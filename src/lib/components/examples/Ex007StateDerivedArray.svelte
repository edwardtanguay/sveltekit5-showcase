<script lang="ts">
	let nums: number[] = $state([]);
	const amount = $derived(nums.length);
	const sum = $derived(nums.reduce((total, num) => total + num, 0));

	const getRandomNumber = () => {
		return Math.floor(Math.random() * 100) + 1;
	};

	const addToArray = () => {
		nums.push(getRandomNumber());
		nums = structuredClone(nums);
	};
</script>

<section class="flex w-[20rem] flex-col flex-wrap items-center">
	<p class="mb-3 text-xs">Same as Ex003 but with $state() and $derived()</p>
	<button
		class="variant-filled-primary btn mb-1"
		onclick={() => (nums = [...nums, getRandomNumber()])}>add to array with spread operator</button
	>
	<button class="variant-filled-primary btn mb-1" onclick={addToArray}
		>add to array with structuredClone</button
	>
	{#if nums.length > 0}
		<p class="text-warning-500">{nums.join(', ')}</p>
	{:else}
		<p class="text-warning-800">(empty)</p>
	{/if}

	<div class="mt-3 bg-slate-700 px-2 py-1 font-mono text-sm text-warning-500">
		<p>Amount: {amount}</p>
		<p>Sum: {sum}</p>
	</div>
</section>
