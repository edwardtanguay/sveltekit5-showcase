<script lang="ts">
	let isAvailable = $state(true);
	let firstName = $state('nnn');
</script>

<section>
	<form>
		<div class="flex gap-1">
			<label for="firstName">Name:</label>
			<input id="firstName" type="text" bind:value={firstName} />
		</div>
		<div class="flex gap-1">
			<input id="isAvailable" type="checkbox" bind:checked={isAvailable} />
			<label for="isAvailable">is available</label>
		</div>
	</form>
</section>
