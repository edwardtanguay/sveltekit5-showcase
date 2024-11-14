<script lang="ts">
	const { name = '', age = 33, isOnline = false } = $props();
</script>

<section class="w-[13rem]">
	<p>Name: {name}</p>
	<p>Age: {age}</p>
	<p>Is online: {isOnline ? 'yes' : 'no'}</p>
</section>



