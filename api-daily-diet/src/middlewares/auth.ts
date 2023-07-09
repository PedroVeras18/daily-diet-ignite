import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

export const verifyToken = async (req: Request, res: Response, next: () => void) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ message: 'Token é obrigatório.' })
    }

    try {
        const replace = token.replace("Bearer ", "");
        const decode = jwt.verify(replace, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).send({ message: "Credenciais inválidas" });
    }
}