
export async function ranking(req, res) {
    try {
       const rank= await db.query(`SELECT  users.id, users.name, COALESCE(SUM(urls.visits),0) AS visitCount,
       COALESCE(COUNT(urls."userId"),0) AS linksCount
        FROM users LEFT JOIN urls 
        ON users.id = urls."userId"
        GROUP BY users.id
        ORDER BY visitCount DESC
        LIMIT 10;`)
        res.status(200).send(rank)
    } catch (err) {
        res.status(500).send(err.message)
    }
}