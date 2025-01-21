function delayed(msg,callback){
   
    setTimeout(()=>{
        console.log(msg);
        if(callback){
            callback();
        }
    
    },2000);

}
delayed("hello , world",()=>{
    console.log("Message has been printed and delayed for 2sec");
})
