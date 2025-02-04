const fs=require('fs')
fs.mkdir("sampledir",(err)=>{
    if(err){
        console.log(err);
        }
        else{
            console.log("Directory created");
        }
        

})
fs.unlink('demo.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted")
    }
})
fs.rename('sample2.txt','sam.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("renamed")
    }
})
fs.readdir('.',(err,files)=>{
    if(err){
        console.log(err);
        }
        else{
        console.log(files)
}
})