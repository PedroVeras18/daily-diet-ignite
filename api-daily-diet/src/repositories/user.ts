import { prisma } from "../services/prisma";
import { Prisma } from '@prisma/client'

const createUser = async (data: Prisma.UserCreateInput) => {
    const user = await prisma.user.create({
        data,
    });

    return user;
};

const getUsers = async () => {
    const users = await prisma.user.findMany({});

    return users;
};

const getById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    return user;
};

const updateUser = async (id: number, data: Prisma.UserCreateInput) => {
    const user = await prisma.user.update({
        where: {
            id,
        },
        data,
    })

    return user;
};

const removeUser = async (id: number) => {
    await prisma.user.delete({
        where: {
            id,
        }
    })

    return;
};