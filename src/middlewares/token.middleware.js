import joi from "joi";
import jsonwebtoken from "jsonwebtoken"

export async function tokenValidation(req, res, next) {

    try {
        const { authorization } = req.headers
        const token = authorization?.replace('Bearer ', '')

        const key = process.env.JWT_SECRET;
        const { userId } = jsonwebtoken.verify(token, key)
        if (!token) {
            res.status(401).send("não veio token")
        } else if (!userId) {
            res.status(401).send("userId incorreto")
        }

        res.locals.session = userId

        const { url } = req.body

        const urlSchema = joi.object({
            url: joi.string().required()
        })
        const validation = urlSchema.validate(req.body)
        if (validation.error) {
            res.status(422).send("Campo de url inválido")
        }

        next()

    } catch (err) {
        res.sendStatus(401)
    }

}