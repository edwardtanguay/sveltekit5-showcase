<script lang="ts">
	export let title = 'nnn';
</script>

<fieldset
	class="mt-5 flex h-fit w-fit flex-col justify-center rounded border border-[#00505783] px-5 pb-3 shadow-md shadow-gray-500"
>
	<legend class="font-mono text-[#005057ab]">{title}</legend>
	<slot />
</fieldset>
