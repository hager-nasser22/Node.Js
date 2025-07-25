const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("running......");
});
let users = [
    {name:"hager" , email:"hager@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send(users);
});

app.get('/user/:email', (req,res)=>{
    let { email } = req.params;
    let findIndex = users.findIndex(ele => ele.email == email);
    if(findIndex > -1){
        res.json({
            "message" : "Get User Successfully",
            "user" : users[findIndex],
        });
    }else{
        res.send("Not Exists");
    };
});

app.post('/addUser', (req,res)=>{
    let {name , email} = req.body;
    let isFind = users.find(ele => ele.email == email);
    // res.send(isFind);
    if(isFind){
        res.send("Email Already Exists");
    }else{
        users.push({name,email});
        res.json({
            "message" : "Created Successfully",
            "users" : users,
        });
    };
});

app.patch('/updateUser'  , (req,res) =>{
    let {name , email} = req.body;
    let findIndex = users.findIndex(ele => ele.email == email);
    if(findIndex > -1){
        users[findIndex].name = name;
        res.json({
            "message" : "Updated Successfully",
            "users" : users,
        });
    }else{
        res.send("Email Not Exist!");
    }
});

app.delete('/deleteUser'  , (req,res) =>{
    let {name , email} = req.body;
    let findIndex = users.findIndex(ele => ele.email == email);
    if(findIndex > -1){
        users.splice(findIndex , 1);
        res.json({
            "message" : "Deleted Successfully",
            "users" : users,
        });
    }else{
        res.send("Email Not Exist!");
    }
});

