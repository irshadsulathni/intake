const http = require('http')

const port = 3001

const server = http.createServer((req,res)=>{
    res.end('hy hello')
})

server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})