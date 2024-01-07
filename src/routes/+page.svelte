<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import dashboard from '$lib/images/dashboard.png';
	import { ChevronsRight } from 'lucide-svelte';
</script>

<div class="m-5 flex h-full flex-row items-center justify-center gap-32">
	<img
		src={dashboard}
		alt="Dashboard"
		class="3xl:max-h-[700px] max-h-[500px] rounded-3xl opacity-80 shadow-md shadow-slate-700 "
	/>
	<div class="align-middle">
		<h1 class="text-5xl leading-relaxed">
			A powerful way of
			<br />accounting your
			<br /><span class="text-teal-700">personal finances</span>.
		</h1>
		<Button variant="secondary" size="lg" class="text-md mt-8">
			<span>Read More</span>
			<span><ChevronsRight /></span>
		</Button>
	</div>
</div>
