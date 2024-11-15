<script lang="ts">
	const formData = $state({
		isAvailable: false,
		firstName: ''
	});
</script>

<section>
	<form>
		<div class="flex gap-1">
			<label for="name">First name:</label>
			<input id="name" type="text" bind:value={formData.firstName} />
		</div>
		<div class="flex gap-1">
			<input id="isAvailable" type="checkbox" bind:checked={formData.isAvailable} />
			<label for="isAvailable">is available</label>
		</div>
	</form>
	{#if formData.firstName !== ""}
	<p>{formData.firstName} {formData.isAvailable ? 'is currently available' : 'is not available at the moment'}.</p>
	{/if}
</section>
