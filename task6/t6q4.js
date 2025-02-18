const http=require('http')

const fs=require('fs')
 
const path=require('path')

const filepath=path.join(__filename,index.html)

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200)
       res.write("This is home page")
       res.end()
    }
    if(req.url==="/index.html"){
        
        fs.readFile("/index.html",(err,data)=>{
            if(err){
                res.writeHead(404)
        }
    else{
        reswrite(data)
    }
    })
       
    
    }

    else{
        res.writeHead(404)
        res.write("wep page not found")
        res.end()
    }
   
})

server.listen(3000)