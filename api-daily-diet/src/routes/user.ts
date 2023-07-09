import {
    create,
    get,
    getId,
    update,
    remove
} from "../controllers/user";
import { verifyToken } from "../middlewares/auth";

import { Express } from 'express';

export const userRoutes = (app: Express) => {
    app.post("/user", create);
    app.get("/user", verifyToken, get);
    app.get("/user/:id", verifyToken, getId);
    app.put("/user/:id", verifyToken, update);
    app.delete("/user/:id", verifyToken, remove);
}