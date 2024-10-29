<script lang="ts">
	import { PUBLIC_SITE_ENV } from '$env/static/public';

	export let title = 'nnn';
	export let url = '';
</script>

{#if PUBLIC_SITE_ENV === 'develop'}
	<fieldset
		class="mt-5 flex h-fit w-fit flex-col justify-center rounded border border-[#00505783] px-5 pb-3 shadow-md shadow-gray-500"
	>
		<legend class="font-mono text-[#005057ab]">{title} </legend>
		<slot />
		{#if url !== ''}
			<p class="mt-1 flex justify-center font-mono text-xs">
				<a href={url} target="_blank" class="text-red-600 underline"> view code </a>
			</p>
		{/if}
	</fieldset>
{/if}
