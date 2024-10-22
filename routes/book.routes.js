import { Router } from "express";
import { createBook, updateBook } from "../controllers/book.controller";
import { validate } from "../validate/middleware.js";
import { bookSchema } from "../validation/book.validate.js";


const router = Router();

router.post('/books', validate(bookSchema), createBook);
router.put('/book/:id', validate(bookSchema), updateBook);

export default router