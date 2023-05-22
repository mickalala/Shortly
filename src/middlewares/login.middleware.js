import joi from 'joi'
import { db } from '../database/database.connection.js'
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

export async function validateSignUp(req, res, next) {
    const { email } = req.body
    const signUpSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        confirmPassword: joi.valid(joi.ref('password')).required()
    })
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send('Campos inválidos!')
        return
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
    const { rows: existEmail } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existEmail.length !== 0 && bcrypt.compareSync(password, existEmail[0].password)) {


        const config = { expiresIn: 60 * 60 * 24 * 30 };
        const token = jsonwebtoken.sign({ userId: existEmail[0].id },process.env.JWT_SECRET || 'secret', config);

        res.locals.session = { token, existEmail };
        next();
    } else {
        return res.status(401).send("email ou senha incorreto!")
    }
}
