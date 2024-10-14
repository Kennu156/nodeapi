import { Express, response } from "express";
import dotenv from 'dotenv'

dotenv.config()

const PORT = import.meta.PORT

const app = express()

app.get('/',(request, respone) => {
    response.json({
        message: 'hello'
    })
})

app.listen(8080, () => {
    console.log('server listening on http://localhost:8080' )
})