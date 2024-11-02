<script lang="ts">
	import { PUBLIC_SITE_ENV } from '$env/static/public';

	export let title = 'nnn';
	export let idCode = '';
	export let publish = true;

	const url = `https://github.com/edwardtanguay/sveltekit5-showcase/blob/dev/src/lib/components/examples/${idCode}.svelte`;
</script>

{#if PUBLIC_SITE_ENV === 'develop' || publish}
	<div class="card mt-6">
		<header class="card-header text-tertiary-600">{title}</header>
		<section class="p-4"><slot /></section>
		<footer class="card-footer">
			{#if url !== ''}
				<p class="mt-1 flex justify-center text-xs">
					<a href={url} target="_blank" class="text-primary-300 underline"> view code </a>
				</p>
			{/if}
		</footer>
	</div>
{/if}
