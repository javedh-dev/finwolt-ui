<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import LoginForm, { type LoginFormSchema } from './login-form.svelte';
	import {type SuperValidated} from "sveltekit-superforms"
	export let data: SuperValidated<LoginFormSchema> 
</script>

<Dialog.Root closeOnOutsideClick={false}>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Login</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[500px]">
		<Tabs.Root value="account" class="w-full">
			<Tabs.List class="mt-4 grid w-full grid-cols-2">
				<Tabs.Trigger value="account">Login</Tabs.Trigger>
				<Tabs.Trigger value="password">Regsiter</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="account">
				<LoginForm form={data.form} />
			</Tabs.Content>
			<Tabs.Content value="password">
				<Card.Root class="border-0">
					<Card.Content class="mt-8 space-y-2">
						<div class="space-y-1">
							<Label for="name">Name</Label>
							<Input id="name" type="text" placeholder="Full Name" required />
						</div>
						<div class="space-y-1">
							<Label for="email">Email</Label>
							<Input id="email" type="email" placeholder="mail@example.com" required />
						</div>
						<div class="space-y-1">
							<Label for="password">Password</Label>
							<Input id="password" type="password" required />
						</div>
						<div class="space-y-1">
							<Label for="confirm-password">Confirm Password</Label>
							<Input id="confirm-password" type="password" required />
						</div>
					</Card.Content>
					<Card.Footer>
						<Button>Submit</Button>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</Dialog.Content>
</Dialog.Root>
