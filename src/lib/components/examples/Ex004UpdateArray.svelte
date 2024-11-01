<script lang="ts">
	let nums: number[] = [];

	const getRandomNumber = () => {
		return Math.floor(Math.random() * 100) + 1;
	};

	const addToArray = () => {
		nums.push(getRandomNumber())
		nums = structuredClone(nums);
	};
</script>

<section class="flex w-[10rem] flex-col items-center">
	<p>click a button:</p>
	<button class="mb-1 w-full" onclick={() => (nums = [...nums, getRandomNumber()])}
		>add to array</button
	>
	<button class="mb-1 w-full" onclick={addToArray}>add to array</button>
	<p>{nums.join(', ')}</p>
</section>
