const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res){
   // console.warn(req.params.name)
    data={email:'test@gmail.com',address:'surat',skills:['node js','asp.net','SE']}
    res.render('profile',{name:req.params.name,data:data})
});

 app.get("/login",function(req,res){
    
     res.render('login')
 });
 app.get("/",function(req,res){
    
    res.render('home')
});
app.listen(1200);
