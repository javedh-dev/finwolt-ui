<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
	import { registerUserSchema, type RegisterUserSchema } from '$lib/schema';
	import type { SuperValidated } from "sveltekit-superforms";
	import Label from './ui/label/label.svelte';
  export let form: SuperValidated<RegisterUserSchema>;
</script>

<Form.Root method="POST" {form} schema={registerUserSchema} let:config class="flex flex-col gap-5">
	<Form.Field {config} name="name">
		<Form.Item>
			<Label for="password">Name</Label>
			<Form.Input type="password"  />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="email">
		<Form.Item>
			<Label for="email">Email</Label>
			<Form.Input type="email" />
			<Form.Validation/>
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Label for="password">Password</Label>
			<Form.Input type="password"  />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	
	<Form.Field {config} name="confirmPassword">
		<Form.Item>
			<Label for="password">Confirm Password</Label>
			<Form.Input type="password"  />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>