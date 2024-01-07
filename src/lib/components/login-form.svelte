<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { loginUserSchema, type LoginUserSchema } from '$lib/schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import Label from './ui/label/label.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data: SuperValidated<LoginUserSchema>;

	const {message} = superForm(data)
</script>

<Form.Root
	form={data}
	schema={loginUserSchema}
	let:config
	action="?/login"
	method="post"
	class="flex flex-col gap-5"
>
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
	{#if $message?.status}
		<p class="text-sm text-destructive">{$message.text}</p>
	{/if}
	<Form.Button>Submit</Form.Button>
</Form.Root>
