const express= require("express");
const app=express();
const port = 3000;

app.use(dateGenerate)
// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{cont})
//     }
// })

// app.get('/',(req,res)=>{
//     res.send('hello worlddd')
// })

// app.get('/about',(req,res)=>{
//     res.send('about page')
// })

// app.get("*",(req,res)=>{
//     res.status(404).send('404')
    
// })

 //custom middleware

 app.get('/profile',token,(req,res)=>{
    res.send('middle ware')
    console.log('user logged');
    

 })

function token(req,res,next){
    console.log('create token');
    next()

 } 

 //application middleware

 function dateGenerate(req,res,next){
    console.log(res);
    next()
    
 }

app.listen(port,()=>{
console.log("server running");

})   