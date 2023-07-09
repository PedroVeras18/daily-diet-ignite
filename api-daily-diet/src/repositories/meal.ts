import { prisma } from "../services/prisma";
import { Prisma } from '@prisma/client'

export const createMeal = async (data: Prisma.MealUncheckedCreateInput) => {
    const meal = await prisma.meal.create({
        data: {
            name: data.name,
            description: data.description,
            userId: data.userId,
            isAtDiet: data.isAtDiet,
        },
    })

    return meal;
};

export const getMeals = async (userId: number) => {
    const meals = await prisma.meal.findMany({
        where: {
            userId,
        },
    });

    return meals;
};

export const getMealById = async (userId: number, mealId: number) => {
    const meal = await prisma.meal.findFirst({
        where: {
            userId,
            id: mealId
        },
    });

    return meal;
};

export const updateMeal = async (data: Prisma.MealUncheckedUpdateInput, mealId: number) => {
    const meal = await prisma.meal.update({
        data,
        where: {
            id: mealId,
        },
    });

    return meal;
};

export const deleteMeal = async (mealId: number) => {
    await prisma.meal.delete({
        where: {
            id: mealId,
        },
    });

    return;
};