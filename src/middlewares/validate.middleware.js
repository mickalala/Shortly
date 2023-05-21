
export async function validateSignUp(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        
        if (validation.error) {
            const errors=validation.error.details.map(d=>d.message)
            res.status(422).send(errors)
        }
        next()
    }
}