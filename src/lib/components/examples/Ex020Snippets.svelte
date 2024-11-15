<script lang="ts">
	let count = $state(0);

	const displayCount = () => `<p>The count is ${count}.</p>`
</script>

{@render displayCount()}
