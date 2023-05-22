import { db } from "../database/database.connection.js"

export async function sendUsersInformations(req, res) {
    try {
        const allUrls = db.query(`SELECT * FROM urls ;`)
        // const returnObject = {
        //     id:
        //     name:
        //     visitCount:
        //     shortenedUrls:allUrls.rows
        // }
    } catch (err) {
        res.status(500).send(err.message)
    }
}