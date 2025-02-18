const http=require('http')

const server=http.createServer((req,res)=>{
    
    if(req.url==="/home"){
       // res.writeHead(500)
       res.write("This is home page")
    
    }
    else if(req.url==="/about"){
        res.write("Welcome to about page")
    }
    else if(req.url==="/contact"){
        res.write("Welcome to contact page")
    }
    
    else{
        res.writeHead(404)
        res.write("wep page not found")
        
    }
    res.end()
   
})

server.listen(3000)