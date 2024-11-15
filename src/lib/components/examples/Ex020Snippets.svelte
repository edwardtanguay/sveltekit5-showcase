<script lang="ts">
	let count = $state(0)
</script>

{#snippet displayCount()}
  Count: {count}
{/snippet}

<p>{@render displayCount()}</p>
