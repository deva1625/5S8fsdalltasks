const express=require('express')

const fs=require('fs')

const app=express();

const users=require('./users.json')

app.use(express.json())

const port=3000

function middleware(req,res,next){
    console.log("Middleware executed")
    next()
}

app.use(middleware)


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/users',(req,res)=>{
    res.send(users)
})

//getting
app.get('/users/:id',(req,res)=>{
    
    const user=users.find(user=>user.id===Number(req.params.id))
    if(!user){
        res.status(404).send("User not found")

    }
    else{

    res.send(user)
    

    }
})



//adding
app.post('/users/adduser',(req,res)=>{
            if(req.body){
                users.push(req.body)


                fs.writeFileSync('./users.json',JSON.stringify(users))
            
                res.status(200).send("Success")
            }
            else{
                res.status(400).send("Invalid request")
            }
            


})

//update
app.patch('/users/modify/:id',(req,res)=>{

        const id=Number(req.params.id)
        const user=users.find(user=>user.id===id)
        if(!user){
            res.status(404).send("User not found")
        }
        else{
            user.name=req.body.name
            res.status(200).send("User modified")

            fs.writeFileSync('./users.json',JSON.stringify(users))

            }
            
})

//delete
app.delete('/users/delete/:id',(req,res)=>{

//const user=users.find((user)=>user.id===Number(req.params.id))
const id=Number(req.params.id)
        const user=users.find(user=>user.id===id)

if(user){
    const index=users.indexOf(user)
    users.splice(index,1)
    res.status(200).send("User deleted")

        fs.writeFileSync('./users.json',JSON.stringify(users))
}else{
    res.status(404).send("User not found")
}



})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})