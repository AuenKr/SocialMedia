import { z } from "zod";
const mySchema = z
    .object({
        name: z.string(),
        email: z.string().email({ message: "Invalid email" }),
        password: z
            .string()
            .min(8, { message: "Must be 8 or more characters long" }),
    })
    .required()
    .strict();

function createUserMiddleware(req, res, next) {
    const isValid = mySchema.safeParse(req.body);
    if (!isValid.success) {
        res.status(400).send({
            msg: "Invalid inputs",
            err: isValid.error,
        });
        return;
    }
    next();
}

export default createUserMiddleware;
