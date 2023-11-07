import { makeComment } from "../../../prisma/controller/comment";

export default async function handler(req,res){
    try {
        switch (req.method) {
            case "POST": {
                const { title, postId } = req.body
                // return res.status(201).json(postId)
                const comment = await makeComment(title,postId)
                return res.status(201).json(comment)
            }
            case "GET": {
                return res.status(201).json({comment:"get post comment"})
            }
            default:{
                return res.status(405).json({ message: 'Method Not Allowed' });
            }
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}