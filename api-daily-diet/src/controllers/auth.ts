import bcrypt from 'bcrypt'
const jwt = require("jsonwebtoken");

import { Request, Response } from "express";
import { getUser } from "../repositories/auth";
import { authValidation } from "../validations/auth";

export const login = async (req: Request, res: Response) => {
    try {
        const data = await authValidation.parse(req.body);
        const user = await getUser(data.email);
        if (!user) throw { message: "Usuario não existe" };

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            );
            return res.status(200).send({ token });
        } {
            return res.status(401).send({ message: "Usuario e/ou senha incorretos" });
        }
    } catch (e) {
        res.status(400).send(e);
    }
};