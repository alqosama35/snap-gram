import * as z from "zod"

export const signupValidation = z.object({
    name: z.string().min(2,{message:"Name must be at least 2 characters."}),
    username: z.string().min(2, {message: "Username must be at least 2 characters.",}),
    email: z.string().min(5,{message:"Email must be at least 2 characters."}),
    password: z.string().min(8,{message:"Password must be at least 8 characters."}),
  })