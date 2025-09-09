import { express } from "express";
import dotenv from 'dotenv'
import bookRoutes from "./routes/book.routes.js"
import authRoutes from "./routes/auth.routes.js" 
import { swaggerOptions } from "./utils/swaggerOptions.js";
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


dotenv.config();

const PORT = process.env.PORT || 3006

const app = express();
app.use(express.json())

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(authRoutes)
app.use(bookRoutes)

app.get('/',(request, response) => {
    response.json({
        message: 'hello',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})