const os=require('os')
setInterval(()=>{


const freemem=os.freemem()
console.log("free Memory:",freemem)},5000

)

const totmem=os.totalmem()
console.log('Total Memory:',totmem)