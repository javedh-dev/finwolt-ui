// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="lucia" />
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
		namespace Superforms {
			type Message = {
				status: 'error' | 'success', 
				text: string
			}
		}
	}
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			name: string;
			email: string;
		};
		type DatabaseSessionAttributes = object;
	}
}


export {};
