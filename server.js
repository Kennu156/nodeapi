import { Express, response } from "express";
import dotenv from 'dotenv'

dotenv.config()

const PORT = import.meta.PORT || 3209

const app = express()

app.get('/',(request, respone) => {
    response.json({
        message: 'hello'
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})