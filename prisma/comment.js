import prisma from "../lib/prisma";

export const makeComment = async(title,postId) => {
    // return postId;
    const comment = await prisma.comment.create({
        data: {
            comment: title,
            post: {
                connect:{
                    id:postId
                }
            }
        }
    })
    return comment;
}