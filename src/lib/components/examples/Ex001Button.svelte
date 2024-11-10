<script lang="ts">
	let count = $state(0);
	let double = $derived(count * 2);

	$effect(() => {
		console.log(111, count);
		$inspect(111)
	});

	const increment = () => {
		count += 1;
	};
</script>

<section class="flex flex-col items-center w-[20rem]">
	<p class="mb-3 text-center">This is a button that increases a count by 2 each time it is pressed.</p>
	<div class="flex gap-5">
		<button type="button" onclick={increment} class="btn variant-filled-primary">Increase Count</button>
		<p class="text-3xl text-warning-500">
			{double}
		</p>
	</div>
</section>
