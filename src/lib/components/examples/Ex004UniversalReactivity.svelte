<script lang="ts">
	import { createUser } from '$lib/state/createUser.svelte';

	let user = createUser();
</script>

<section class="w-[20rem]">
	<p class="mb-3">User is <span class="text-warning-500">{user.age}</span> years old and their score is <span class="text-warning-500">{user.score}</span>.</p>
	<div class="flex justify-around">
		<button class="btn mb-1 variant-filled-primary text-secondary-900" onclick={() => (user.age += 1)}
			>increase age</button
		>
		<button class="btn mb-1 variant-filled-primary text-secondary-900" onclick={() => (user.score += 10)}
			>increase score</button
		>
	</div>
</section>
