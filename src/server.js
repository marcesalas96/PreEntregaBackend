const { log } = require("console")
const express = require("express")
const path = require ("path")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT|| 8000
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const errorRoutes = require("./routes/errorRoutes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/productos", productRoutes)
app.use("/api/carrito", cartRoutes)
app.use("*", errorRoutes)

app.listen(PORT, (error)=> {
    error ? console.log("Error al iniciar el servidor: ", error) : console.log(`Servidor escuchando puerto ${PORT}`)
})