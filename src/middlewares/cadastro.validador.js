import { safeParse } from "zod";

function cadastroValidator(schema){
    return (req, res, next) => {
        try {
            const validated = schema.safeParse(req.body);
            if(!validated.sucess){
                return res.status(400).json({
                    error: validated.error.issues
                })
            }
            next()
            
        } catch (error) {
            return res.status(400).json({ error: "validação falhou" })
        }
    }
}

export default cadastroValidator;
