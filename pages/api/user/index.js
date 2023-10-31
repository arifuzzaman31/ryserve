import { createUser, getAllUser,destroyUser } from "../../../prisma/user";

export default async function handler(req,res){
    try {
      switch(req.method){
          case 'POST': {
            const {email,name,address} = req.body
            //return res.status(200).json({message:address});
              const new_user = await createUser(email,name,address);
              return res.status(201).json(new_user);
          }
          case 'DELETE': {
            const {id} = req.query
            const destUser = await destroyUser(id);
            return res.status(200).json({message:'Delete User Successful',user: destUser});
          }
          case 'GET': {
              const al_user = await getAllUser();
              return res.status(200).json(al_user);
          }
      }
    } catch (error) {
      
    }
}