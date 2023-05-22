import { db } from "../database/database.connection.js"
import { nanoid } from "nanoid"

export async function returnShortUrl(req, res) {
    try {
        const { url } = req.body
        const { userId } = res.locals.session
        let shortUrl = nanoid(10)
        const insertUrl = await db.query(`INSERT INTO urls ("shortUrl", url) 
        VALUES ($1, $2)`, [shortUrl, url]);

        return res.status(201).send(shortUrl)
    } catch (err) {
        res.status(500).send(err.message)
    }
}