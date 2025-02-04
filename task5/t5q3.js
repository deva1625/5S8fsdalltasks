const events=require('events')


const emitter=new events.EventEmitter()


emitter.on('userdetails', (name,age)=>
{
    console.log(`Name is ${name} and age is ${age}`)
})
emitter.emit("userdetails",'deva',16)
emitter.emit("userdetails",'barath',15)
