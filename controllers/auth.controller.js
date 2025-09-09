import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import  bcrypt  from 'bcrypt';

dotenv.config();
const prisma = new PrismaClient();

export const register = async (req, res,) => {

    try {

        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        };

        const passwordHash = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                email,
                passwordHash,
            },
        });

        res.status(201).json({ message: 'User registered successfully' });

    } catch(exception) {
        res.status(500).json({ message: 'Internal server error' });
    };

};


export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        };

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        };

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_HASH, { expiresIn: '1h' });

        res.status(200).json({ token });


    } catch (exception) {
        res.status(500).json({ message: 'Internal server error' });
    }

};