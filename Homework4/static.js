const http=require('http')
const PORT=3001
const server=http.createServer((req,res)=>{
    const {url,method}=req
    if(method=='GET'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Page</title>
      </head>
      <body>
        <h1>Welcome to My HTTP Server</h1>
        <p>This server is s static server.</p>
      </body>
      </html>`)
    }
})
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })