const { EventEmitter } = require("stream");

class Timer extends EventEmitter{
    constructor(seconds){
        super()
        this.seconds=seconds
    }
    timer(){
        this.emit("start")
        console.log(this.seconds)
        for(let i=this.seconds-1;i>=0;i--){
            this.emit("tick",i)
        }
        this.emit("end")
    }
}
let time=new Timer(4)
time.on("start",()=>{
    console.log("start")
})
time.on("tick",(item)=>{
    console.log(`${item} remaining`)
})
time.on("end",()=>{
    console.log("end")
})
time.timer()