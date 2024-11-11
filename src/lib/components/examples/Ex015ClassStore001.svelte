<script lang="ts">
	import { Store } from '../../../stores/classStore.svelte';

	const store = new Store();
</script>

<section>
	<p class="mb-3">count: <span class="text-warning-500">{store.count}</span></p>
	<p class="mb-3">double count: <span class="text-warning-500">{store.doubleCount}</span></p>
	<button
		type="button"
		onclick={() => store.decrementCount()}
		class="variant-filled-primary btn mb-3">decrease</button
	>
	<button
		type="button"
		onclick={() => store.incrementCount()}
		class="variant-filled-primary btn mb-3">increase</button
	>
	<button type="button" onclick={() => store.loadSkills()} class="variant-filled-primary btn mb-3"
		>load skills</button
	>
	{#if store.loadingSkills}
		<p class="mb-3">
			<span class="text-warning-500">{store.loadingSkills ? 'loading skills...' : ''}</span>
		</p>
	{:else}
		<p class="mb-3">
			number of skills: <span class="text-warning-500">{store.numberOfSkills}</span>
		</p>
	{/if}
</section>
