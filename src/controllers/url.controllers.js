import { db } from "../database/database.connection.js"
import { nanoid } from "nanoid"

export async function returnShortUrl(req, res) {
    try {
        const { url } = req.body
        const userId = res.locals.session
        console.log(userId)
        let shortUrl = nanoid(10)
        console.log(shortUrl, url)
        const insertUrl = await db.query(`INSERT INTO urls("shortUrl", url, "userId", "visitCount") 
        VALUES ($1, $2, $3, $4);`, [shortUrl, url, userId, 0]);

        const objecturl = await db.query(`SELECT urls.id FROM urls WHERE "shortUrl"=$1;`,[shortUrl])
        console.log(objecturl.rows[0].id)
        const idUrl=objecturl.rows[0].id
        const returnObject = {
            id:idUrl,
            shortUrl: shortUrl
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
        if (all_urls.rows.length === 0) {
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
        const  userId  = res.locals.session
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

export async function redirectUser(req, res) {
    try {
        const { shortUrl } = req.params
        console.log(shortUrl)
        const urlQuery = await db.query(`SELECT * FROM urls WHERE "shortUrl" = $1`, [shortUrl])
        if (urlQuery.rows.length === 0) {
            res.sendStatus(404)
        }
        const { visitCount, id, url } = urlQuery.rows[0]
        let newVisit = visitCount + 1
        const renewVisits = await db.query(`UPDATE urls SET "visitCount"=${newVisit} WHERE id = $1;`, [id])
        return res.redirect(url)
    } catch (err) {
        res.status(500).send(err.message)
    }
}