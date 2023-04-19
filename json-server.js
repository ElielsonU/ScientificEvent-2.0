const JsonServer = require("json-server")
const crypto = require("crypto")
const fs = require("fs")

const server = JsonServer.create()
const router = JsonServer.router("./db.json")
const middleware = JsonServer.defaults()
const port = 8000

server.use(middleware)
server.use(JsonServer.bodyParser)

const parseCookies = (cookies) => {
    const cookieList = []

    for (let x of cookies.split(";")) {
        const cookie = x.split("=")
        cookie[0] = cookie[0].replace(" ", "")
        cookieList[cookie[0]] = cookie[1] 
    }

    return cookieList
}

server.post("/users", (req, res, next ) => {
    const db = JSON.parse(fs.readFileSync("./db.json"))

    req.body.token = crypto.randomUUID()
    const email = req.body.email
    
    const emailAlreadyExists = db.users.find(user => user.email === email)
    
    if (emailAlreadyExists) {
        return res.status(400).json({msg: "email already exists"})
    }

    if (!req.body.username || 
        !req.body.email || 
        !req.body.password || 
        typeof req.body.admin != "boolean"){
        return res.status(400).json({msg: "missing params (username, email, password, admin)"})
    }

    req.body.email = req.body.email

    req.body.admin = Number(req.body.admin)
    return next()

})

server.get("/users", (req, res, next) => {
    const cookies = parseCookies(req.headers.cookie)
    
    if (Number(cookies["admin"])) {
        return next()
    }

    return res.status(200).json({msg: "you're not an admin"})
})

server.get("/articles/lenght", (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db.json"))
    const msg = db.articles.length >= 10 ? 10 : db.articles.lenght

    return res.status(200).json({msg})
})

server.post("/aut/login", (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db.json"))

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({msg: "missing params (email, password)"})
    }

    const email = req.body.email
    const password = req.body.password

    const user = db.users.find((user) => {
        return user.email == email&&user.password == password
    })

    if (!user) {
        return res.status(404).json({msg: "Email or password wrong"})
    }

    return res.status(200).json(user)
})

server.use(router)

server.listen(port, () => {
    console.log(`Server running in: http://localhost:${port}`)
})