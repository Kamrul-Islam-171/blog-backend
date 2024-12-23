import { z } from "zod";

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({required_error: "email is requird"}),
        password: z.string({required_error: "password is requird"}),
    })
})

export const AuthValidation = {
    loginValidationSchema
}