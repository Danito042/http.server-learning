
import fs from 'fs'
import path from 'path'
import os from "os"
import http, { Server } from "http"

console.log(" ");


 fs.readFile('./server.txt',"utf8", (err :any ,data: string)=>{
     if (err) {
    console.log(err);
    return;
     }
    console.log("data:", data);
    
})
//to write a file 
fs.writeFileSync('./write', "hello keep going, hopefully we get there")

// try {
//     fs.writeFileSync('./write', "GOD IS GOOD ")
// } catch (error) {
//     console.log(error)
    
// }

//PATH OF FILE
const pathoffile = path.join(__dirname , 'public', "./sever.txt")
console.log("pathoffile :",pathoffile);

//os
console.log(os.cpus());

//HTTP
//creating a server
const port : number = 4620
const port2 :number= 5570
const server = http.createServer((req :http.IncomingMessage ,res :http.ServerResponse<http.IncomingMessage>)=>{
   if (req.url ==="/wagwan") {
    res.writeHead(200,{'content-Type': 'text/plain'})
    res.end("Bless Up Fam")
   } else {
    res.writeHead(404)
    res.end("Data Not Found")
   }
})
server.listen(port,()=>{
    console.log(`server is listening ${port}`);
    
})


interface user {
    id : number;
    name : string
}

let users :user[] = [{id: 1, name: "Durkioo"}, {id: 2, name : "Lil-Baby"}]

const server2 = http.createServer((req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    if(req.url === "/users"){
        res.end(JSON.stringify(users))
        return
    }
})
server2.listen(port2, () =>{
    console.log(`Server is listening on ${port2}`);
})
