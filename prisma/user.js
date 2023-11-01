import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async(email,name,address) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                address: address,
            },
        });
        return user;
    } catch (error) {
        console.log('Error creating user:', error);
    }
}

export const updateUser = async(id,data) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: data,
        });
        return user;
    } catch (error) {
        console.log('Error creating user:', error);
    }
}

export const getAllUser = async() => {
    const users = await prisma.user.findMany({
        take: 1
    });
    return users;
}

export const getUser = async(id) => {
    const users = await prisma.user.findMany({
        where: {
            id: id,
        },
    });
    return users;
}

export const destroyUser = async(id) => {
    const user = await prisma.user.delete({
        where:{
            id: { id }
        }
    });
    return user;
}