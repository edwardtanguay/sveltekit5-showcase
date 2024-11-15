<script lang="ts">
	let inputElement: HTMLInputElement;

	$effect(() => {
		inputElement.focus();
	});
</script>

<section class="w-[13rem]">
	<p class="mb-2"><input bind:this={inputElement} /></p>
	<p class="text-xs">(This input box is focused on page load.)</p>
</section>
