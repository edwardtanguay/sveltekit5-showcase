<script lang="ts">
	import { createUser } from '$lib/state/createUser.svelte';

	let user = createUser();
</script>

<section class="w-[20rem]">
	<p class="mb-3">User is {user.age} years old and their score is {user.score}.</p>
	<div class="flex justify-around">
	<button class="mb-1 variant-filled btn" onclick={() => user.age += 1}
		>increase age</button
	>
	<button class="mb-1 variant-filled btn" onclick={() => user.score += 10}>increase score</button>
	</div>
</section>
