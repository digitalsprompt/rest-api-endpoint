
const express = require("express")
const app = express()
const port = 9235
const fs = require('fs')
const productRoutes = require('./routes/productsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const servicesRoutes = require('./routes/servicesRoutes')



const homePage = fs.readFileSync("./pages/index.html", "utf-8")
const userPage = fs.readFileSync("./pages/user.html", "utf-8")
const servicesPage = fs.readFileSync("./pages/services.html", "utf-8")
const productsPage = fs.readFileSync("./pages/products.html", "utf-8")




app.get("/", (req, res) => {
    res.send(homePage)
})

app.get("/user", (req, res) => {
    res.send(userPage)
})

app.get("/services", (req, res) => {
    res.send(servicesPage)
})

app.get("/products", (req, res) => {
    res.send(productsPage)
})




app.use(productRoutes)
app.use(usersRoutes)
app.use(servicesRoutes)
app.use(express.json())

app.listen(port, () => {
    console.log(`server has started successfully. click http://localhost:${port} to open website`)
})