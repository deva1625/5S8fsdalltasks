const fs=require('fs')



fs.appendFile('./sample2.txt',"This text is appended again",()=>{
    console.log("File is appended")
})
fs.readFile('./sample2.txt','utf-8',(err,data)=>{
   
        if(err){
            console.log(err)
        }
        else{
        console.log(data)
        }

})

