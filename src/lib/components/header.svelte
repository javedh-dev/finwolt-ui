<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { LoginUserSchema } from '$lib/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import DarkToggle from './dark-toggle.svelte';
	import LoginForm from './login-form.svelte';
	import RegisterForm from './register-form.svelte';
	
	export let loginForm: SuperValidated<LoginUserSchema>;
	export let registerForm: SuperValidated<LoginUserSchema>;
	</script>

<div class="flex h-16 flex-row gap-4">
	<a href="/" class="brand text-5xl">
		<span class="text-teal-800">fin</span><span>wolt</span>
	</a>
	<div class="grow"></div>
	<DarkToggle />
	<Dialog.Root closeOnOutsideClick={false}>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Login</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[500px]">
			<Tabs.Root value="login" class="w-full">
				<Tabs.List class="mt-4 grid w-full grid-cols-2">
					<Tabs.Trigger value="login">Login</Tabs.Trigger>
					<Tabs.Trigger value="register">Regsiter</Tabs.Trigger>
				</Tabs.List>

				<Tabs.Content value="login">
					<LoginForm form={loginForm} />
				</Tabs.Content>
				<Tabs.Content value="register">
					<RegisterForm form={registerForm} />
				</Tabs.Content>
			</Tabs.Root>
		</Dialog.Content>
	</Dialog.Root>
</div>
