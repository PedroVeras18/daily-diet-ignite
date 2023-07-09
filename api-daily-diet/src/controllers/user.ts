import {
    createUser,
    getUsers,
    getById,
    removeUser,
    updateUser
} from "../repositories/user";

import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const get = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getId = async (req: Request, res: Response) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        await removeUser(Number(req.params.id));
        res.status(200).send();
    } catch (error) {
        res.status(400).send(error);
    }
};