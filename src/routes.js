const routes = require('express').Router()

const authMiddleware = require('./app/middleware/auth')
const SessionCotroller = require('./app/controllers/SessionController')

routes.post('/sessions', SessionCotroller.store)

routes.use(authMiddleware) // este middleware ira ser utilizado apenas para a rotas abaixo desta linha
routes.get('/dashboard', (req, res) => {
    return res.status(200).send()
})

module.exports = routes