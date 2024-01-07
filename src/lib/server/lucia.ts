import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client, {
		user: 'user',
		key: 'key',
		session: 'session'
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (data) => {
		return {
			name: data.name,
			email: data.email
		};
	}
});

export type Auth = typeof auth;
