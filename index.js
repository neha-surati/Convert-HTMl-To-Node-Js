const express=require('express')

const path=require('path')

const port=8081;

const app=express();

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,'/public')));

// const middleware=(req,res,next)=>{
//     console.log("hello..");
//     let age =req.query.age;
//     if(age>=18){
//        return next(); 
//     }
//     return res.redirect('index')
// }

//  app.use(middleware)

app.get('/',(req,res)=>{
    return res.render('index')
})

app.get('/form-basic',(req,res)=>{
    return res.render('form-basic')
})


app.listen(port,(err)=>{
    if(err){
        console.log("server not start in port");
        return false
    }
    console.log("server start http://localhost:"+ port)
})
