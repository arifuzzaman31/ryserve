import { createPost, destroyPost, getAllpost, getPost, updatePost } from "../../../prisma/controller/post"

export default async function handler(req,res){
    try {
        switch(req.method){
            case "POST": {
                const {title,body,comment} = req.body
                const post = await createPost(title,body,comment)
                return res.status(201).json(post);
            }
            case "GET": {
                const {id} = req.query
                if(!id){
                    const posts = await getAllpost();
                    return res.status(201).json(posts);
                }
                const post = await getPost(id);
                return res.status(200).json(post);
            }
            case "PUT": {
                const {id} = req.query
                const posts = await updatePost(id,req.body);
                return res.status(200).json(posts);
            }
            case "DELETE": {
                const {id} = req.query
                const posts = await destroyPost(id);
                return res.status(200).json({ message: 'Post Delete successfully' });
            }
            default: {
                return res.status(405).json({ message: 'Method Not Allowed' });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}