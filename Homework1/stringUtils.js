function reverse(string){
    let result=""
    for(let i=string.length-1;i>=0;i--){
        result+=string[i]
    }
    return result
}
function capitalize(string){
    return string.at(0).toUpperCase()+string.substring(1)
}
function truncate(string,num){
    if(num>string.length){
        throw new Error("num must be smaller")
    }
    return string(0,num)+"..."
}
module.exports={reverse,capitalize,truncate}