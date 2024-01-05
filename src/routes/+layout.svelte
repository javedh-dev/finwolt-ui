<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import type { LoginFormSchema } from '$lib/components/login-form.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { type SuperValidated } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="px-8 py-4">
	<ModeWatcher />
	<Header {data} />
	<slot />
</div>
