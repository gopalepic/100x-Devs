import {z} from 'zod';

export const SignupInput = z.object({
    username:z.string(),
    password:z.string()
})

export type SignupParams = z.infer<typeof SignupInput>;