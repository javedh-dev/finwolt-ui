import type {LayoutServerLoad} from "./$types"
import { superValidate } from "sveltekit-superforms/server";
import { loginUserSchema } from "$lib/schema";
import { registerUserSchema } from "$lib/schema";

export const load: LayoutServerLoad = async ({locals}) => {
  const session = await locals.auth.validate();
  return {
    user: session?.user,
    loginForm: await superValidate(loginUserSchema),
    registerForm: await superValidate(registerUserSchema)
  };
};