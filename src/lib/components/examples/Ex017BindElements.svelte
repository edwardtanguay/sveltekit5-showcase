<script lang="ts">
	let inputElement: HTMLInputElement;

	$effect(() => {
		inputElement.focus();
	});
</script>

<section class="w-[13rem]">
	<p><input bind:this={inputElement} /></p>
</section>
