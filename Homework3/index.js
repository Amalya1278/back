const fs=require('fs')
////task1
//  const res=fs.openSync("data.txt",'w')
//  fs.writeSync(res,"hello,this is the first line. \n")
//  fs.writeSync(res,"this is a second line. \n")
//  fs.closeSync(res)

////task2
// fs.openSync('data.txt','r')
 //const buffer=Buffer.alloc(64)
//fs.readSync(res,buffer)
// console.log(buffer)
// fs.closeSync(res)

////task4
// const file=fs.openSync("example.txt",'w+')
// const buffer=Buffer.alloc(32)
// fs.writeSync(file,"0123456789")
// fs.writeSync(file,"Ab",5)
// fs.readSync(file,buffer,0,buffer.length,0)
// console.log(buffer)
// fs.closeSync(file)

////task5
// const file=fs.openSync("data.txt",'r')
// const buffer=fs.readFileSync("data.txt")
// console.log(buffer.length)
// const middle=Math.floor(buffer.length/2)
// const buffer1=Buffer.alloc(10)
// fs.readSync(file,buffer1,0,buffer1.length,middle)
// console.log(buffer1)


/////task6
// fs.writeFileSync('file1.txt', 'Content of the first file.\n')
// fs.writeFileSync('file2.txt', 'Content of the second file.\n')
// const merged = fs.readFileSync('file1.txt') + fs.readFileSync('file2.txt')
// fs.writeFileSync('merged.txt', merged)
// console.log('Files merged successfully')


/////task7
// fs.writeFileSync("message.txt","hello world!")
// const content=fs.readFileSync("message.txt")
// const index = content.indexOf('Hello') + 'Hello'.length+1;
// const newContent = content.slice(0, index) + ' Awesome' + content.slice(index)
// fs.writeFileSync('message.txt', newContent)


////task3
const source=fs.openSync("data.txt",'r')
const dest=fs.openSync("copy.txt",'w')
const buffer=Buffer.alloc(16)
while(fs.readSync(source,buffer,0,buffer.length,null)>0){
    fs.writeSync(dest,buffer,0,buffer.length,null)
}
fs.closeSync(source)
fs.closeSync(dest)


