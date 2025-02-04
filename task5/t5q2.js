const os=require('os')
const uptime=os.uptime(Date)

console.log("Uptime in seconds:",uptime)

const days=Math.floor(uptime/(3600*24))
const hours=Math.floor((uptime % (3600*24))/3600)
const minutes=Math.floor(uptime % 3600/60)

console.log('System was up for ',days,'days',hours,'hours',minutes,'minutes')