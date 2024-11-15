<script lang="ts">
	let isAvailable = $state(true);
	let name = $state('');
</script>

<section>
	<form>
		<div class="flex gap-1">
			<label for="name">Name:</label>
			<input id="name" type="text" bind:value={name} />
		</div>
		<div class="flex gap-1">
			<input id="isAvailable" type="checkbox" bind:checked={isAvailable} />
			<label for="isAvailable">is available</label>
		</div>
	</form>
	<p>{name} {isAvailable ? 'is currently available' : 'is not available at the moment'}.</p>
</section>
