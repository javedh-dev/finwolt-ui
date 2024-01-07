<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { LoginUserSchema } from '$lib/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import DarkToggle from './dark-toggle.svelte';
	import LoginForm from './login-form.svelte';
	import RegisterForm from './register-form.svelte';
	import type { User } from 'lucia';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from './ui/dropdown-menu';
	import Button from './ui/button/button.svelte';

	export let user: User|undefined;
	export let loginForm: SuperValidated<LoginUserSchema>;
	export let registerForm: SuperValidated<LoginUserSchema>;

	const getInitials = function (fullName: string) {
		const names = fullName.split(' ');
		let initials = names[0].substring(0, 1).toUpperCase();

		if (names.length > 1) {
			initials += names[names.length - 1].substring(0, 1).toUpperCase();
		}
		return initials;
	};
</script>

<div class="flex h-16 flex-row items-center gap-4">
	<a href="/" class="brand text-5xl">
		<span class="text-teal-800">fin</span><span>wolt</span>
	</a>
	<div class="grow"></div>
	<DarkToggle />
	{#if !user}
		<Dialog.Root closeOnOutsideClick={false}>
			<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Login</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[500px]">
				<Tabs.Root value="login" class="w-full">
					<Tabs.List class="mt-4 grid w-full grid-cols-2">
						<Tabs.Trigger value="login">Login</Tabs.Trigger>
						<Tabs.Trigger value="register">Regsiter</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content value="login">
						<LoginForm data={loginForm} />
					</Tabs.Content>
					<Tabs.Content value="register">
						<RegisterForm form={registerForm} />
					</Tabs.Content>
				</Tabs.Root>
			</Dialog.Content>
		</Dialog.Root>
	{:else}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="focus-visible:outline-none">
				<Avatar.Root
					class="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-[17px] font-medium uppercase text-muted-foreground"
				>
					<Avatar.Fallback>{getInitials(user.name)}</Avatar.Fallback>
				</Avatar.Root>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="text-center">
				<DropdownMenu.Group>
					<DropdownMenu.Label>
						<span class="text-lg">{user.name}</span><br />
						<span class="text-sm text-slate-400">({user.email})</span>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<form action="/?/logout" method="post">
						<Button type="submit">Logout</Button>
					</form>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/if}
</div>
