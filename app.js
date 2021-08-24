const express = require('express')
const connectDB = require('./ConfigDB/connectDB')
const personRouter = require('./Routes/person')
const app = express()

app.use(express.json())
connectDB()
app.use("/api/person",personRouter)


// Création du serveur avec le port 5000

const port =5000
app.listen(port,()=>{
    console.log(`Serveur connecté au port ${port}`)
})
