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
	<button class="variant-filled btn mb-1" onclick={() => (nums = [...nums, getRandomNumber()])}
		>add to array with spread operator</button
	>
	<button class="variant-filled btn mb-1" onclick={addToArray}>add to array with structuredClone</button>
	{#if nums.length > 0}
		<p>{nums.join(', ')}</p>
	{:else}
		<p class="text-gray-500">(empty)</p>
	{/if}
</section>
