import { loginUserSchema } from '$lib/schema';
import { type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const actions: Actions = {
	login: async (event) => {
		console.log(event);
		const form = await superValidate(event, loginUserSchema);
		console.log(form);
		// if (!form.valid) {
		// 	return fail(400, {
		// 		form
		// 	});
		// }
		return {
			form
		}
		
	}
};
