<script lang="ts">
	import { getStore } from '../../../stores/runeStore.svelte';

	const store = getStore();
</script>

<section>
	<p class="mb-3">count: <span class="text-warning-500">{store.count}</span></p>
	<button type="button" onclick={() => store.resetCount()} class="variant-filled-primary btn mb-3"
		>reset</button
	>
	<div>
		<button type="button" onclick={() => store.loadSkills()} class="variant-filled-primary btn mb-3"
			>load skills</button
		>
	</div>
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
