function fetchDataWithCallback(callback){
    let value=Math.round(Math.random()*10)
    if(value>5){
        const obj={
           msg:"information fetched successfully"

        }
        callback(obj)
    }else{
        callback("failed to retreive information.")

    }



}
function result(obj){
        console.log(obj)


}
fetchDataWithCallback(result)
