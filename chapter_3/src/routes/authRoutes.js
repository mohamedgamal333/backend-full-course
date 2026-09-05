import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register',(req,res)=>{
    console.log("body",req.body)
const {username,password}=req.body
console.log("username",username)
// encrypt the password using bcryptjs library, and the second parameter is the salt rounds,
//  which is the number of times the password will be hashed. 
// The higher the number, the more secure the password will be, but it will also take longer to hash. The default value is 10.
const hashedpassword=bcrypt.hashSync(password,10)

// save the new user and hashed password to db 
try{
    // insert the new user into the database
    const insertUser =db.prepare(`INSERT INTO users(username,password)
        VALUES(?,?) `)
        const result = insertUser.run(username,hashedpassword)

        // create a default todo for the new user
        // now that we have a user, and i want to add there first todo to them
        const defaultTodo=`hello!:) Add your first todo!`
        const insertTodo=db.prepare(`INSERT INTO todos(user_id,task) 
         VALUES(?,?)`)
         insertTodo.run(result.lastInsertRowid,defaultTodo)


         // create a token 
         const token=jwt.sign({id:result.lastInsertRowid},process.env.
            JWT_SECRET,{expiresIn:'24h'})
            res.json({token})

}catch(err){
    console.log(err.message)
    res.sendStatus(503)
}


// console.log("hashedpasword : ",hashedpasword)
// res.status(201)
// res.json({message: "User registered successfully"})
})

router.post('/login',(req,res)=>{

    const {username ,password}=req.body
    try{
        const getUser=db.prepare(`SELECT * FROM users WHERE username=?`)
        const user=getUser.get(username)
        if(!user){

            return res.status(401).send({message:" user not found "})
        }

        const isPasswordValid=bcrypt.compareSync(password,user.password)
        if(!isPasswordValid){
            return res.status(401).send({message:"Invalid password"})}
            console.log("user",user)
        const token= jwt .sign({id:user.id},process.env.JWT_SECRET,{expiresIn:"24h"})
        res.json({token})
    }catch(err){
        console.log(err.message)
        res.sendStatus(503)
    
    }

})


export default router;

