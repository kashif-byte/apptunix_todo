const express = require("express");
const pool = require("./database/datbase")
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors())
app.post('/submit', async(req,res)=>{
    try{
        const task = req.body.task
        const query = "insert into todoList(task) values(?)"
        const params = [task]
        const result = await pool.makeQuery(query, params);
        console.log(result)
        res.status(200).send(response)
    }
    catch(error){
        res.send(error)
    }   
})
app.get('/fetch', async(req, res)=>{
    try{
        const query = "select * from todoList";
        const params = []
        const result = await pool.makeQuery(query, params);
        console.log(result)
        res.status(200).send(result)
    }
    catch(error){
        console.log("in error")
        console.log(error)
    }   
})
app.put('/update', async(req, res)=>{
    try{
        id = req.body.id
        const query = `UPDATE todoList SET iscompleted=1, completedAt = now() WHERE id=${id};`
        const params = []
        const result = await pool.makeQuery(query, params);
        console.log(result)
        res.status(200).send(result)
    }
    catch(error){
        console.log("in error")
        console.log(error)
    }   
})


app.listen(8001, ()=>{
    console.log("app is listening")
})
