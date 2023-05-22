
export function validateSignUp(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
      
            if (validation.error) {
                const errors = validation.error.details.map(detail => detail.message)
                return res.status(422).send("Campo de url inválido")
            }
        
        next()
    }
}