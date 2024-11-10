<script lang="ts">
	import { getStore } from '../../../stores/store13.svelte';

	const store = getStore();
</script>

<section>
	<p>times opened: {store.timesOpened}</p>
	<button type="button" onclick={() => store.incrementTimesOpened()} class="variant-filled-primary btn mb-3"
		>increase</button
	>
</section>
