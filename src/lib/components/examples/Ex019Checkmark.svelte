<script lang="ts">
	let isAvailable = $state(true);
</script>

<section class="w-[13rem]">
	<form>
		<input type="checkbox" bind:checked={isAvailable} />
		{#if isAvailable}
			we have it in stock
		{:else}
			it's out of stock
		{/if}
	</form>
</section>



