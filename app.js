const http=require("http")
const port=3000

const  server =http.createServer((request,response)=>{
    response.write(" hello server");
    response.end()
    }
);

server.listen(port)