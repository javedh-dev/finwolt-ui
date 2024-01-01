<script>
	import Header from '$lib/components/header.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<div class="px-8 py-4">
	<ModeWatcher />
	<Header />
	<slot />
</div>
