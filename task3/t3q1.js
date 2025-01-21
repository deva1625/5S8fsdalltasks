function greet(name,callback){
    let msg=`hello ${name}`
    return callback(msg)
}
function show(msg){
    console.log(msg)
}
greet("deva",show)