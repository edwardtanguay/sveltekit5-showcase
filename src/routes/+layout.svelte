<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
</script>

<header class="p-3">
<h1 class="text-3xl text-primary-300">{$page.data.content}</h1>
</header>

<nav>
	<ul class="flex gap-3 bg-primary-800 px-2 py-1 pl-6">
		<li>
			<a href="/" class={$page.url.pathname === '/' ? 'font-bold text-warning-500' : ''}>Home</a>
		</li>
		<li>
			<a href="/about" class={$page.url.pathname === '/about' ? 'font-bold text-warning-500' : ''}
				>About</a
			>
		</li>
	</ul>
</nav>

<main class="p-6">
	<slot />
</main>
