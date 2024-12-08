const path=require("path")
class PathAnalyzer{
     getBaseName(filePath){
        return path.basename(filePath)


    }
    getDirName(filePath){
        return path.dirname(filePath)

    }
    getExtension(filePath){
        return path.extname(filePath)

    }
    isAbsolutePath(filePath){
        return path.isAbsolute(filePath)

    }
}
let obj = new PathAnalyzer();
let path1 = "/home/user/documents/report.pdf";

console.log(obj.getBaseName(path1))
console.log(obj.getDirName(path1))
console.log(obj.getExtension(path1))
console.log(obj.isAbsolutePath(path1))