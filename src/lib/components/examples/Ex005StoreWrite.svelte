<script lang="ts">
	import { user, numberOfSkills } from '../../../stores/userStore';
</script>

{#if $user}
	<p>user name is {$user.name}</p>
	<button
		class="variant-filled-primary btn mb-1 text-secondary-900"
		on:click={() => user.set({ name: 'Jack', loggedIn: true })}>Login</button
	>
	<hr />
{/if}
<p>there are {$numberOfSkills} skills</p>
