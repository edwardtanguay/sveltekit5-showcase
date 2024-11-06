<script lang="ts">
	const createCounter = () => {
		const counter = $state({count: 0})
		return counter
	};

	let counter = createCounter();
</script>

<section class="flex w-[20rem] flex-col items-center">
	<div class="flex gap-5">
		<button type="button" onclick={() => (counter.count += 1)} class="variant-filled-primary btn"
			>Increase Count</button
		>
		<p class="text-3xl text-warning-500">
			{counter.count}
		</p>
	</div>
</section>
