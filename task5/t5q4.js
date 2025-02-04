const events=require('events')


const emitter=new events.EventEmitter()


emitter.once('userdetails', (name,age)=>
{
    console.log(`Name is ${name} and age is ${age}`)
})
emitter.emit("userdetails",'deva',2)
emitter.emit("userdetails",'dev',2)
