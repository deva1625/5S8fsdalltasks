const express=require('express')
const { copyFileSync } = require('fs')

const app=express()
const users=require('./user.json')

app.get('/',(req,res)=>{
    res.send('Hello World')
    

    
})
app.get('/users',(req,res)=>{
    res.json(users)
})


app.listen(2000,()=>{
    console.log("Server started in port 2000")
})
