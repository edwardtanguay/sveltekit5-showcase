<script lang="ts">
	import { getStore } from '../../../stores/runeStore.svelte';

	const store = getStore();
</script>

<section>
	<p class="mb-3">count: <span class="text-warning-500">{store.count}</span></p>
	<button type="button" onclick={() => store.resetCount()} class="variant-filled-primary btn mb-3">reset</button>
</section>
