import { userRoutes } from "./user";
import { Express } from "express";

export default function(app: Express) {
    userRoutes(app);
}