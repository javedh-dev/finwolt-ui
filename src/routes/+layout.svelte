<script type="module" lang="ts">
	import Header from '$lib/components/header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import type { LayoutData } from './$types';
	
	export let data: LayoutData;

</script>

<div class="px-8 py-4">
	<ModeWatcher />
	<Header {...data} />
	<slot />
</div>
