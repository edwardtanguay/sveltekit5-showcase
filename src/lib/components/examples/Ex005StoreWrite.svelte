<script lang="ts">
	import { user } from '../../../stores/userStore';
</script>

{#if $user}
	<p>user name is {$user.name}</p>
	<button
		class="variant-filled-primary btn mb-1 text-secondary-900"
		on:click={() => user.set({ name: 'Jack', loggedIn: true })}>Login</button
	>
{/if}
