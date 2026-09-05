import express from 'express';
import db from '../db.js';


const router = express.Router();

// This endpoint is used to get all the todos for a specific user.
router.get('/',(req,res)=>{

    const getTodos=db.prepare(`SELECT * FROM todos WHERE user_id=?`)
    const todos =getTodos.all(req.userId)
    res.json(todos)
})

// This endpoint is used to create a new todo for a specific user.
router.post('/',(req,res)=>{

    const {task}=req.body
    const insertTodo=db.prepare(`INSERT INTO todos(user_id,task) VALUES(?,?)`)
    const result = insertTodo.run(req.userId,task)
    res.json({id:result.lastInsertRowid,task,completed:0})
})


// This endpoint is used to update a specific todo for a specific user.
// this code the mentor write it and i need to update this code to be more improved
router.put('/:id',(req,res)=>{
    const {completed}=req.body
    const {id}=req.params
    const {page}=req.query

    const updateTodo =db.prepare(`UPDATE todos SET completed=? WHERE id=? `)
    updateTodo.run(completed,id)
    res.json({message:"todo completed"})
     
})
// router.put('/:id',(req,res)=>{
//     const {completed}=req.body
//     const {id}= req.params
//     const userId =req.userId
//     const updateTodo = db.prepare(`UPDATE todos SET completed=? WHERE id =? AND user_id=?`);

//     const result = updateTodo.run(completed,id,userId);
//     if(result.changes===0){
//         return res.status(404).json({message:"Todo not found"});

//     }
//     res.json({message:"Todo updated successfully "})
// })



// This endpoint is used to delete a specific todo for a specific user.
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    const userId=req.userId
    const deleteTodo= db.prepare(`DELETE FROM todos WHERE id = ? AND user_id=? `)
    deleteTodo .run(id,userId)
    res.send({message:"Todo deleted"})
}) 

export default router;


