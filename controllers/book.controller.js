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

        response.status(200).json({
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

export default updateBook = async (request, response) => {
    const { title, description, year, author, publisher } = request.body;
    const { id } = request.params;

    try {

        await prisma.book.update({
            where: { id: Number(id) },
            data: {
                title,
                description,
                year,
                author,
                publisher
            }
        })

        response.status(201).json({
            message: 'Updated sucssese',
            updateBook
        })
    }  catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'there is error'
        })
    }

    
}