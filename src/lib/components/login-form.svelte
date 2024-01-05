<script lang="ts" context="module">
	import { z } from "zod";
	export const loginFormSchema = z.object({
		email: z
			.string({ required_error: "Please select an email to display" })
			.email(),
		password: z
			.string({ required_error: "Please select an email to display" })
			.email(),
	});
	export type LoginFormSchema = typeof loginFormSchema;
</script>

<script lang="ts">
	import * as Form from '$lib/components/ui/form/index';
    import {type SuperValidated} from "sveltekit-superforms"
	export let form: SuperValidated<LoginFormSchema>;
</script>

<Form.Root method="POST" {form} schema={loginFormSchema} let:config>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email</Form.Label>
			<Form.Input type="email" placeholder="mail@example.com" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="password">
		<Form.Item>
			<Form.Label>Password</Form.Label>
			<Form.Input type="password"  />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</Form.Root>
