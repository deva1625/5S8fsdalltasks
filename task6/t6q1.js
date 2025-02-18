const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200)
       res.write("This is home page")
       res.end()
    }
    if(req.url==="/dev"){
        res.writeHead(500)
       res.write("This is home page")
    
    }

    else{
        res.writeHead(404)
        res.write("wep page not found")
        res.end()
    }
   
})

server.listen(3000)