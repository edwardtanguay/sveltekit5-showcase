<script lang="ts">
	let count = $state(5);
	let millis = $state(1000);

	$effect(() => {
		const interval = setInterval(() => count++, millis);
		return () => clearInterval(interval);
	});

</script>

<section class="flex w-[10rem] flex-col items-center">
	<h2 class=" text-[1.9rem]">{count}</h2>
	<p class="mb-1 text-sm">wait {millis / 1000} second{millis === 1000 ? '' : 's'}</p>
	<button class="mb-1 variant-filled btn" onclick={() => (millis = millis * 2)}>slower</button>
	<button class="mb-1 variant-filled btn" onclick={() => (millis = millis / 2)}>faster</button>
</section>
