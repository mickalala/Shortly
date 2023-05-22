import { db } from "../database/database.connection.js"

export async function sendUsersInformations(req, res) {
    try {
        const userId = res.locals.session
        const allUrls = await db.query(`SELECT urls.id, urls."shortUrl", urls.url, urls."visitCount" 
        FROM urls WHERE "userId"=$1;`, [userId])
        const allVisits = allUrls.rows.map(i => i.visitCount).reduce((prev, curr) => prev + curr, 0)
        const queryName = await db.query(`SELECT  users.id, users.name
         FROM users WHERE id=$1;`[userId])
        console.log(queryName)
        const returnObject = {
            id: userId,
            name: queryName.name,
            visitCount: allVisits,
            shortenedUrls: allUrls.rows
        }
        // console.log(userId)
        // console.log(allUrls.rows)
        res.status(200).send(returnObject)

    } catch (err) {
        res.status(500).send(err.message)
    }
}