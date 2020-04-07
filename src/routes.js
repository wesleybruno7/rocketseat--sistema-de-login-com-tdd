const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
    name: "Wesley",
    email: "wesley@test.com.br",
    password_hash: "1231635161565"
})

module.exports = routes