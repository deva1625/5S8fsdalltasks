function fetchData(url){
    let p=new Promise((resolve,reject)=>{
        if(url.includes('error')){
            reject("Failed to get data")
        }
        else{
            resolve("data fetched successfully")
        }

    })
    return p;
}
let res=fetchData("htpps://localhost:/8080/login/error")

console.log(res)

res.catch(()=>{
    //console.log(val)
})