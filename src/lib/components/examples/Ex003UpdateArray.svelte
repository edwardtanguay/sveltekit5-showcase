<script lang="ts">
	let nums: number[] = [];

	const getRandomNumber = () => {
		return Math.floor(Math.random() * 100) + 1;
	};

	const addToArray = () => {
		nums.push(getRandomNumber());
		nums = structuredClone(nums);
	};
</script>

<section class="flex flex-col flex-wrap items-center w-[20rem]">
	<button class="mb-1 variant-filled-primary btn" onclick={() => (nums = [...nums, getRandomNumber()])}
		>add to array with spread operator</button
	>
	<button class="mb-1 variant-filled-primary btn" onclick={addToArray}>add to array with structuredClone</button>
	{#if nums.length > 0}
		<p class="text-warning-500">{nums.join(', ')}</p>
	{:else}
		<p class="text-warning-800">(empty)</p>
	{/if}
</section>
