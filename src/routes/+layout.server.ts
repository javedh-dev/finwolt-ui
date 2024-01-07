import type {LayoutServerLoad} from "./$types"
import { superValidate } from "sveltekit-superforms/server";
import { loginUserSchema } from "$lib/schema";
import { registerUserSchema } from "$lib/schema";

export const load: LayoutServerLoad = async () => {
  return {
    loginForm: await superValidate(loginUserSchema),
    registerForm: await superValidate(registerUserSchema)
  };
};