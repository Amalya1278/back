const path=require("path")
class PathNormalizer{
    normalizePath(filePath){
        return path.normalize(filePath)

    }
    joinPath(...paths){
        return path.join(...paths)

    }
}

let obj=new PathNormalizer()
let path2="./user/../user/documents//file.txt"
console.log(obj.normalizePath(path2))
console.log(obj.joinPath('user','home'))