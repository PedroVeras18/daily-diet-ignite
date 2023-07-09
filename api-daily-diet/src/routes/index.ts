import { Express } from "express";

import { authRoutes } from "./auth";
import { userRoutes } from "./user";

export default function(app: Express) {
    userRoutes(app);
    authRoutes(app)
}