<script lang="ts">
	let count = $state(0);
</script>

{#snippet displayCount()}
	Count: {count}
{/snippet}

{#snippet displayButton()}
	<button type="button" onclick={() => count++} class="variant-filled-primary btn mb-3"
		>increase</button
	>
{/snippet}

<p class="mb-3">{@render displayCount()}</p>
<div>{@render displayButton()}</div>
