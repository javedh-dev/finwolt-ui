<script lang="ts">
	import DarkToggle from "./dark-toggle.svelte";
	import LoginDialog from "./login-dialog.svelte";
	import Button from "./ui/button/button.svelte";

</script>

<div class="h-16 flex flex-row gap-4">
	<a href="/" class="text-5xl brand">
		<span class="text-teal-800">fin</span><span>wolt</span>
	</a>
    <div class="grow"></div>
    <DarkToggle/>
	<LoginDialog/>
</div>
