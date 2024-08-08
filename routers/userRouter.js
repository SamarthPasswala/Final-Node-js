const { Router } = require("express");
const { signupPage, login, logout, profile, signup, loginPage } = require("../controller/userControl");

const u_router = Router()

u_router.get('/signup', signupPage)
u_router.get('/login', loginPage)
u_router.post('/login', login)
u_router.get('/profile', profile)
u_router.get('/logout', logout)
u_router.post('/signup', signup)

module.exports = u_router