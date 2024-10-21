import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createBook = async (request, response) => {
    const { title, description, year, author, publisher } = request.body;

    try {

        const newBook = await prisma.book.create({
            data: {
                title: title,
                description: description,
                year: year,
                author: author,
                publisher: publisher
            }
        })

        response.status(262).json({
            message: 'Book created sucseefely',
            newBook
        })

    } catch (error) {
        console.log(error)
        response.status(400).json({
            message: 'there is error'
        })
    }
}