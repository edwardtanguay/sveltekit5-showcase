<script lang="ts">
	import { user } from '../../../stores/userStore';
</script>

{#if $user}
	<p>user name is {$user.name}</p>
{/if}
