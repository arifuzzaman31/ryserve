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

export const getAllUser = async() => {
    const users = await prisma.user.findMany({
        size: 3,
        skip: true
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