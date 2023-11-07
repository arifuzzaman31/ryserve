import prisma from "../lib/prisma";

export const createUser = async(email,name,address) => {
    try {
        // return address;
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name
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
        console.log('Error updating user:', error);
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