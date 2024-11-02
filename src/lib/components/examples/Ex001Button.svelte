<script lang="ts">
	let count = $state(0);
	let double = $derived(count * 2);

	$effect(() => {
		console.log(111, count);
	});

	const increment = () => {
		count += 1;
	};
</script>

<p class="mb-2">This is a button that increases a count by 2 each time it is pressed.</p>
<div class="flex gap-5">
	<button type="button" onclick={increment} class="variant-filled btn">Increase Count</button>
	<div class="text-3xl">
		{double}
	</div>
</div>
