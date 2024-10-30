import { PrismaClient } from "@prisma/client";
import { response } from "express";

const prisma = new PrismaClient()

export const getAllBooks = async () => {

    try {

        const books = await prisma.book.findMany()

        response.status(200).json({
            books
        })
        
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'there is error'
        });

    }

};

export const getBook = async (request, response) => {
    try {

        const { id } = request.params

        await prisma.book.findUnique({
            where: { id }
        })

        if (!book) {
            return response.status(404).json({
                message: 'Book not found'
            })

            response.status(200).json({
                book
            })
        }
        
    } catch (error) {
        
        console.log(error)
        response.status(500).json({
            message: 'there is error'
        });
    }
};

export const deleteBook = async (request, response) => {
    try {

        const { id } = request.params;

        await prisma.book.delete({
            where: { id }
        })

        response.status(200).json({
            updateBook
        });
        
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: 'there is error'
        });
        
    }
};


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

        response.status(201).json({
            message: 'Book created sucseefely',
            newBook
        })

    } catch (error) {
        console.log(error)
        response.status(500).json({
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