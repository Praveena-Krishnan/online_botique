import Users from "../models/createuser.js"




export const createUser=async(req,res)=>{
    console.log( req.body.email)
    
    const user=req.body
    const newUser = new Users(user)

      try {
       await newUser.save();
       res.status(201).json(newUser)
      } catch (error) {
        res.status(409).json({message:error.message})
      }

    
}

export const findUser = (req,res)=>{
  Users.findOne(req.params)
   .then((user)=>{
       if(user){
           res.status(403).json({user:user})
       }else{
           res.status(201).json({user:null})
       }
   })
   .catch((err)=>console.log(err))
}