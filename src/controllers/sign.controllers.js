import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt"

export async function postSignUp(req, res) {
    const { name, email, password, confirmPassword } = req.body
    const hashPassword = bcrypt.hashSync(password, 2)
    try {
        await db.query(`INSERT INTO users (name,email, password)
 VALUES ($1,$2,$3);`, [name, email, hashPassword])
        res.status(201).send("Cadastro concluido")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postLogin(req, res) {

    try {
        const { token, existEmail } = res.locals.session
        db.query(`INSERT INTO sessions(token, "userId") VALUES ($1,$2);`, [token, existEmail[0].id])
        const objectToken={token:token}
        res.status(200).send(objectToken)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
