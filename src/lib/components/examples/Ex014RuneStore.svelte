<script lang="ts">
	import { getStore } from '../../../stores/runeStore.svelte';

	const store = getStore();
</script>

<section class="w-[13rem]">
	<p class="mb-3">count: <span class="text-warning-500">{store.count}</span></p>
	<p class="mb-3">double count: <span class="text-warning-500">{store.doubleCount}</span></p>
	<button type="button" onclick={() => store.resetCount()} class="variant-filled-primary btn mb-3"
		>reset</button
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
