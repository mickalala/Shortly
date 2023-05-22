import { db } from "../database/database.connection.js"
import { nanoid } from "nanoid"

export async function returnShortUrl(req, res) {
    try {
        const { url } = req.body
        const { userId } = res.locals.session
        let shortUrl = nanoid(10)
        const insertUrl = await db.query(`INSERT INTO urls ("shortUrl", url, "userId) 
        VALUES ($1, $2)`, [shortUrl, url, userId]);

        const objecturl = await db.query(`SELECT * urls `)
        const returnObject = {
            id: userId,
            url: shortUrl
        }
        return res.status(201).send(returnObject)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function returnAllUrls(req, res) {
    try {
        const { id } = req.params
        const all_urls = await db.query(`SELECT * fROM urls WHERE id=$1;`, [id])
        if (all_urls.length === 0) {
            res.sendStatus(404)
        }
        const { shortUrl, url } = all_urls.rows[0]
        const returnBody = {
            "id": id,
            "shortUrl": shortUrl,
            "url": url
        }
        res.status(200).send(returnBody)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteUrl(req, res) {
    try {
        const { userId } = req.locals.session
        const { id } = req.params
        const delUrl = await db.query(`SELECT * FROM urls WHERE id = $1`, [id])
        if (delUrl.rows.length === 0) {
            res.status(404).send("Não foi encontrado o id do url.")
        }
        if (delUrl.rows[0].userId !== userId) {
            return res.sendStatus(401)
        }
        await db.query(` DELETE  FROM urls WHERE id = $1;`, [id])
        res.sendStatus(204)
    } catch (err) {
        res.status(500).send(err.message)
    }
}