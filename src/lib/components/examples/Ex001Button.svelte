<script lang="ts">
	let count = $state(0);
	let double = $derived(count * 2);

	function increment() {
		count += 1;
	}
</script>

<p class="mb-2">This is a button that increases a count by 2 each time it is pressed.</p>
<div>
	<button onclick={increment}>
		count = {double}
	</button>
</div>
