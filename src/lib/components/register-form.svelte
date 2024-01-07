<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { registerUserSchema, type RegisterUserSchema } from '$lib/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import Label from './ui/label/label.svelte';

	export let form: SuperValidated<RegisterUserSchema>;

	const { message } = superForm(form);
</script>

<Form.Root
	{form}
	schema={registerUserSchema}
	let:config
	action="?/register"
	method="POST"
	class="flex flex-col gap-5"
>
	<Form.Field {config} name="name">
		<Form.Item>
			<Label for="name">Name</Label>
			<Form.Input />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="email">
		<Form.Item>
			<Label for="email">Email</Label>
			<Form.Input type="email" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Label for="password">Password</Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>

	<Form.Field {config} name="confirmPassword">
		<Form.Item>
			<Label for="password">Confirm Password</Label>
			<Form.Input type="password" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	{#if $message?.status}
		<p class="text-sm text-destructive">{$message.text}</p>
	{/if}
	<Form.Button>Submit</Form.Button>
</Form.Root>
