import { slugify } from "../../lib/helper";
import prisma from "../../lib/prisma";

export const createPost = async(title,body,comment) => {
    try {
        //return slugify(title);
        const post = prisma.post.create({
            data: {
                title: title,
                slug: slugify(title),
                body:body,
                comments: {
                    create: {
                        comment: comment,
                    },
                },
            }
        });
        return post; 
    } catch (error) {
        console.log('Error creating post:', error);
    }
}

export const getAllpost = async() => {
    const posts = prisma.post.findMany({
        include: {
            comments: true,
          },
    })
    return posts;
}
export const getPost = async(id) => {
    const post = prisma.post.findMany({
        where: {
            id:id
        },
        include: {
            comments: true,
          },
    })
    return post;
}

export const updatePost = async(id,data) => {
    try {
        const post = prisma.post.update({
            where:{
                id: id,
                data: data
            }
        });
        return post;
    } catch (error) {
        console.log('Error updating post:', error);
    }
}
export const destroyPost = async(id) => {
    const post = prisma.post.delete({
        where:{
            id: id
        }
    });
    return post;
}