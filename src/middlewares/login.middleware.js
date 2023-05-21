import joi from 'joi'
import { db } from '../database/database.connection.js'

export async function validateSignUp(req, res, next) {
    const { email } = req.body
    const signUpSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmPassword: joi.string().required()
    })
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send('Campos inválidos!')
    }
    const { rows: existEmail } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existEmail.length !== 0) {
        return res.send(409)
    }

    next()

}

export async function validateLogin(req, res, next) {
    const { email, password } = req.body;
    const loginSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
    const validation = loginSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send('algo de errado não está certo!')
    }
}
