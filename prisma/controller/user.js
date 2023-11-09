import { bcrptHash, hashCheck } from "../../lib/helper";
import prisma from "../../lib/prisma";
import UserResources from "../resources/UserResources";

export const createUser = async(data) => {
    try {
        const hasPassw = await bcrptHash(data.password);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                user_type: data.user_type,
                birthDate: new Date(data.birthDate),
                phoneNumber: data.phoneNumber,
                country: data.country,
                city: data.city,
                location: data.location,
                residence_address: data.residence_address, 
                occupation: data.occupation,
                designation: data.designation,
                nid: data.nid,
                tin: data.tin,
                having_business: data.having_business, 
                password: hasPassw,
                status: data.status
            },
        });
        return user;
    } catch (error) {
        console.log('Error creating user:', error);
    }
}

export const updateUser = async(id,data) => {
    try {
        // return data;
        const hasPassw = await bcrptHash(data.password);
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data:{
                //email: data.email,
                name: data.name,
                user_type: data.user_type,
                birthDate: new Date(data.birthDate),
                phoneNumber: data.phoneNumber,
                country: data.country,
                city: data.city,
                location: data.location,
                residence_address: data.residence_address, 
                occupation: data.occupation,
                designation: data.designation,
                nid: data.nid,
                tin: data.tin,
                having_business: data.having_business, 
                password: hasPassw,
                status: data.status
            },
        });
        return user;
    } catch (error) {
        console.log('Error updating user:', error);
    }
}

export const getAllUser = async() => {
    const users = await prisma.user.findMany({});  
    return (new UserResources).handleCollection(users);
}

export const getUser = async(id) => {
    const users = await prisma.user.findFirst({
        where: {
            id: id,
        },
    });
    return (new UserResources).handleSingleObject(users);
}

export const destroyUser = async(id) => {
    const user = await prisma.user.delete({
        where:{
            id: { id }
        }
    });
    return user;
}