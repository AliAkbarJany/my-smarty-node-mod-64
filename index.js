const express = require('express');
const cors = require('cors');
const app=express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Ali Akbar Hashami rafsanjany talukder. How are you?')
})
const users=[
    {id:1,name:'sajon', email:'student@gmail.com'},   
    {id:2,name:'shafik', email:'teacher@gmail.com'},   
    {id:3,name:'kamal', email:'farmer@gmail.com'},  
    {id:4,name:'sahin', email:'businessman@gmail.com'},    
    {id:5,name:'motaleb', email:'driver@gmail.com'}    
]

app.get('/users',(req,res)=>{
    console.log('Querry',req.query)
    res.send(users);
})

app.get('/u/:id',(req,res)=>{
    console.log(req.params);
    const id=req.params.id;
    const u =users[id];
    res.send(u);
})

app.post('/user',(req,res)=>{

    console.log('reques...::',req.body);
    const user=req.body;
    user.id=users.lingth+1;
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','oranges'])
})

// app.get('/users',(req,res)=>{
//     res.send({id:1,name:'rafsan jany taluder',profession:'student'});
// })
app.listen(port,()=>{
    console.log('Listening to port ',port)
})