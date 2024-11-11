<script lang="ts">
	import {Store} from '../../../stores/classStore.svelte'	

	const store = new Store();
	const message = 'nnn';
</script>

<section class="w-[13rem]">
	<p class="mb-3">message: <span class="text-warning-500">{message}</span></p>
	<p class="mb-3">count: <span class="text-warning-500">{store.count}</span></p>
</section>
