import { express, response } from "express";
import dotenv from 'dotenv'
import bookRoutes from "./routes/book.routes.js"

dotenv.config();

const PORT = process.env.PORT || 3600

const app = express();

app.get('/',(request, response) => {
    response.json({
        message: 'hello',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})