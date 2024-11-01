<script lang="ts">
	import { createUser } from '$lib/state/createUser.svelte';

	let user = createUser();
</script>

<section>
	<p>User is {user.age} years old and their score is {user.score}.</p>
</section>
