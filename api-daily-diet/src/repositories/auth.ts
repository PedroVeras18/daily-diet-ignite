import { prisma } from "../services/prisma";

export const getUser = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    return user;
}