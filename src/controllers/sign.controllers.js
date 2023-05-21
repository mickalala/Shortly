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
    const { email, password } = req.body
}
