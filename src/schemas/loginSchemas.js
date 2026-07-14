import z from "zod";

export const loginSchemas = z.object({
    username: z.string().min(1,{message:"please enter username"}),
    password: z.string().min(1,{message:"please enter password"})
})