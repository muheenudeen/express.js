
const express = require ('express')
const path = require ('path')
const app = express()

app.use(function (req,res,next){
    console.log("middlewear okk");
    next()
    
})

app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'index.html'))
    next()
})

app.use(function(req,res){
    console.log('end');
    

})


app.get('/about',function(req,res){
    res.send('about page')
})

app.post('/signup',(req,res)=>{
    res.send("account created")
})

app.listen(3003,()=>{
    console.log('server running');
    // console.log(__dirname);
    
    
})