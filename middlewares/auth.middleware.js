import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authenticateToken = async (req, res, next) => {
    try {
        const token = req.header['authorization']?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET_HASH);
        const user = await new PrismaClient().user.findUnique({
            where: { id: payload.id }
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        req.user = {
            id: user.id,
            email: user.email,
        }
    } catch (exception) {
        res.status(500).json({ message: 'Something went wrong' });
        
    }
}