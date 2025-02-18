const express=require('express')


const app=express()
const users=require('./user.json')

app.get('/',(req,res)=>{
    res.send('Hello World')
    

    
})

app.listen(2000,()=>{
    console.log("Server started in port 2000")
})
// let a=10
// let b=20;
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(a,b)