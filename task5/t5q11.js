const http=require('http')

const users=require('./users.json')

const server=http.createServer((req,res)=>{

    if(req.url==='/users'){
        res.write(JSON.stringify(users))
       
    }
    
    res.end()
})
server.listen(3000)
console.log("server created")