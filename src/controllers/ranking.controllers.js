import { db } from "../database/database.connection.js"

export async function ranking(req, res) {
    try {
       const rank= await db.query(`SELECT  users.id, users.name,
        COALESCE(COUNT(urls."userId"),0) AS "linksCount",
        COALESCE(SUM(urls."visitCount"),0) AS "visitCount"
        FROM users LEFT JOIN urls 
        ON users.id = urls."userId"
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10;`)
        res.status(200).send(rank.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}