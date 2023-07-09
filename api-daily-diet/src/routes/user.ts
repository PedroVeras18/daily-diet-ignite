import {
    create,
    get,
    getId,
    update,
    remove
} from "../controllers/user";

import { Express } from 'express';

export const userRoutes = (app: Express) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getId);
    app.put("/user/:id", update);
    app.delete("/user/:id", remove);
}