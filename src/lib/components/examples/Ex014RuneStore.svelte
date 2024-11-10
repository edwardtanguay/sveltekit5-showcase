<script lang="ts">
	import { getStore } from '../../../stores/runeStore.svelte';

	const store = getStore();
</script>

<section>
	<p class="mb-3">times opened: {store.timesOpened}</p>
	<button type="button" onclick={() => store.decrementTimesOpened()} class="variant-filled-primary btn mb-3">decrease</button>
	<button type="button" onclick={() => store.incrementTimesOpened()} class="variant-filled-primary btn mb-3">increase</button>
</section>
