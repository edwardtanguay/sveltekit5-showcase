<script lang="ts">
	import {store} from '../../../stores/store.svelte';
</script>

<section class="flex w-[20rem] flex-col items-center">
	<div class="mb-3" style="color: {store.theme === 'dark' ? 'darkgreen' : 'lightgreen'}">Theme is: {store.theme}</div>
	<pre class="text-xs text-warning-300 bg-slate-700 px-3">
{JSON.stringify(store, null, 2)}
	</pre>
</section>
