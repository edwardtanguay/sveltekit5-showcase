<script lang="ts">
	const formData = $state({
		isAvailable: false,
		lastName: ''
	});
</script>

<section>
	<form>
		<div class="flex gap-1">
			<label for="name">Last name:</label>
			<input id="name" type="text" bind:value={formData.lastName} />
		</div>
		<div class="flex gap-1">
			<input id="isAvailable" type="checkbox" bind:checked={formData.isAvailable} />
			<label for="isAvailable">is available</label>
		</div>
	</form>
	<p>{formData.lastName} {formData.isAvailable ? 'is currently available' : 'is not available at the moment'}.</p>
</section>
