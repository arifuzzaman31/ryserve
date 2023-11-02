import { createUser, getAllUser,destroyUser, updateUser,getUser } from "../../../prisma/user";
// Define roles and their corresponding permissions
// const roles = {
//   admin: ['POST', 'DELETE', 'PUT', 'GET'],
//   user: ['GET'],
// };

// // Middleware function to check role-based permissions
// const checkPermissions = (role) => {
//   return (req, res, next) => {
//     const allowedMethods = roles[role];
//     const { method } = req;

//     if (!allowedMethods || !allowedMethods.includes(method)) {
//       return res.status(403).json({ message: 'Access Forbidden' });
//     }
//     next();
//   };
// };
export default async function handler(req,res){
    try {
      // Assume you have a way to get the user's role
    // const userRole = getUserRole(); // Replace this with the logic to get the user's role

    // Implement middleware to check permissions based on the user's role
      // checkPermissions(userRole)(req, res, async () => {
        // Handle requests based on the user's role and permissions
          switch(req.method){
              case 'POST': {
                const {email,name,address} = req.body
                //return res.status(200).json(address.street);
                  const new_user = await createUser(email,name,address);
                  return res.status(201).json(new_user);
              }
              case 'DELETE': {
                const {id} = req.query
                const destUser = await destroyUser(id);
                return res.status(200).json({message:'Delete User Successful',user: destUser});
              }

              case 'PUT': {
                const {id} = req.query
                const {email,name,address} = req.body
                const updatedUser = await updateUser(id,{email:email,name:name,address:address});
                return res.status(200).json({message:'User Updated Successful',user: updatedUser});
              }

              case 'GET': {
                  const {id} = req.query
                  if(!id.length){
                    const users = await getAllUser();
                    return res.status(200).json(users);
                  }else{
                    const user = await getUser(id);
                    return res.status(200).json(user);
                  }
              }
              default: {
                return res.status(405).json({ message: 'Method Not Allowed' });
              }
          }
      // });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
}