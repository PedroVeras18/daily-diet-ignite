import { Express } from "express";
import { login } from "../controllers/auth";

export const authRoutes = (app: Express) => {
    app.post("/login", login)
}