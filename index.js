const express = require('express')
const cookieParser = require('cookie-parser')
const db = require('./config/database')
const blog = require('./models/blog')
const router = require('./routers/router')
const userDB = require('./models/User')
const u_router = require('./routers/userRouter')
const port = 8081
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/uploads', express.static('uploads/'));
app.use(cookieParser())
app.use(u_router)
app.use(router)
app.set('view engine', 'ejs')

app.listen(port, (err) => {
    db()
    if (err) {
        console.log("Server Not Started");
        return false
    }
    console.log("Server Started At....http://localhost:" + port);
})