const { EventEmitter } = require("stream");

class UserActionTracker extends EventEmitter{
    constructor(){
        super()
        this.actions=[]
    }
    logAction(action){
        this.actions.push(action)
        this.emit("actionLogged",action)
        if(this.actions.length>5){
            this.emit("maxactions",this.actions.length)
        }


    }
    getActionCount(){
        return this.actions.length


    }
}
let action=new UserActionTracker()
action.on("actionLogged",(item)=>{
    console.log(action)
})
action.on("maxActions",(item)=>{
    console.log(item)
})
action.logAction("login")
action.logAction("viewProfile")
action.logAction("logout")
action.logAction("login")
action.logAction("update")
action.logAction("logout")
console.log(action.getActionCount())