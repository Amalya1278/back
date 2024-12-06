function unique(arr){
    return [...new Set(arr)]
}
function flatten(arr){
    let result=[]
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...item)
            
        }
        else{
            result.push(item)
        }
        return result
    }
}
function chunk(arr,size){
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result

}
module.exports={unique,flatten,chunk}