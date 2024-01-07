import { loginUserSchema, registerUserSchema } from '$lib/schema';
import { auth } from '$lib/server/lucia';
import { db } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad, Actions } from './$types';
import { LuciaError } from 'lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/dashboard');
	return {};
};

export const actions: Actions = {
	login: async (event) => {
		const form = await superValidate(event, loginUserSchema);
		console.log(form);
		try {
			const key = await auth.useKey(
				"email",
				form.data.email.toLowerCase(),
				form.data.password.trim()
			);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			event.locals.auth.setSession(session); // set session cookie
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === "AUTH_INVALID_KEY_ID" ||
					e.message === "AUTH_INVALID_PASSWORD")
			) {
				return message(form, {
					status: "error",
					text: "Incorrect username or password!!!"
				}, {
					status: 400
				});
			}
			return message(form, {
				status: "error",
				text: "An Unknown Error occured!!!"
			}, {
				status: 500
			})
		}
		throw redirect(302, "/dashboard");
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
			return message(
				form,
				{
					status: 'error',
					text: 'Both password should match'
				},
				{
					status: 400
				}
			);
		}

		if (existingUser) {
			return message(
				form,
				{
					status: 'error',
					text: 'Email already registered!!!'
				},
				{
					status: 400
				}
			);
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
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		auth.invalidateSession(session?.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/');
	}
};
