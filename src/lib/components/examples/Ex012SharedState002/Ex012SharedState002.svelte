<script lang="ts">
	import './style.scss';
	import { store } from '../../../../stores/store.svelte';

	const toggleTheme = () => {
		store.theme = store.theme === 'dark' ? 'light' : 'dark';
	};
</script>

<section class="ex012 flex w-[20rem] flex-col items-center">
	<div class="mb-3" style="color: {store.theme === 'dark' ? '#555' : '#bbb'}">
		Theme is: {store.theme}
	</div>
	<div>
		<button type="button" onclick={() => toggleTheme()} class="variant-filled-primary btn mb-3"
			>Toggle Shared Theme</button
		>
		<form>
			<div class="row">
				First Name: <input bind:value={store.currentUser.firstName} />
			</div>
			<div class="row">
				Last Name: <input bind:value={store.currentUser.lastName} />
			</div>
		</form>
	</div>
</section>
