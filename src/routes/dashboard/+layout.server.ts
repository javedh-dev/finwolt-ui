import type {LayoutServerLoad} from "./$types"
import { superValidate } from "sveltekit-superforms/server";
import { loginUserSchema } from "$lib/schema";
import { registerUserSchema } from "$lib/schema";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({locals}) => {
  const session = await locals.auth.validate();
  if(!session) throw redirect(301,"/")
  return {
    user: session?.user,
    loginForm: await superValidate(loginUserSchema),
    registerForm: await superValidate(registerUserSchema)
  };
};