<script lang="ts">
	const fd = $state({
		isAvailable: false,
		name: ''
	});
</script>

<section>
	<form>
		<div class="flex gap-1">
			<label for="name">Name:</label>
			<input id="name" type="text" bind:value={fd.name} />
		</div>
		<div class="flex gap-1">
			<input id="isAvailable" type="checkbox" bind:checked={fd.isAvailable} />
			<label for="isAvailable">is available</label>
		</div>
	</form>
	<p>{fd.name} {fd.isAvailable ? 'is currently available' : 'is not available at the moment'}.</p>
</section>
