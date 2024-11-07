<script lang="ts">
	import { store } from '../../../stores/store.svelte';

	const toggleTheme = () => {
		store.theme = store.theme === 'dark' ? 'light' : 'dark';
	};
</script>

<section class="flex w-[20rem] flex-col items-center">
	<div class="mb-3">Theme is: {store.theme}</div>
	<div>
		<button type="button" onclick={() => toggleTheme()} class="variant-filled-primary btn"
			>Add</button
		>
	</div>
</section>
