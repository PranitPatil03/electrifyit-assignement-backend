import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";

const PORT = process.env.PORT || 4000 
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})