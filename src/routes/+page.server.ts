import { loginUserSchema, registerUserSchema } from '$lib/schema';
import { auth } from '$lib/server/lucia';
import { db } from '$lib/server/prisma';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const actions: Actions = {
	login:async (event) => {
		const form = await superValidate(event, loginUserSchema);
		console.log(form);
	},
	register: async (event) => {
		const form = await superValidate(event, registerUserSchema);
		console.log(form);
		const existingUser = await db.user.findFirst({
			where: {
				email: form.data.email
			}
		});

		if (form.data.password.trim() !== form.data.confirmPassword.trim()) {
			return fail(400,{
				message: "Both password should match"
			})
		}

		if (existingUser) {
			return fail(400, {
				message: 'Username already taken'
			});
		}

		const user = await auth.createUser({
			key: {
				providerId: 'email', // auth method
				providerUserId: form.data.email.toLowerCase(), // unique id when using "username" auth method
				password: form.data.password.trim() // hashed by Lucia
			},
			attributes: {
				email: form.data.email,
				name: form.data.name
			}
		});
		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});
		event.locals.auth.setSession(session);
		throw redirect(302, '/');
	}
};
