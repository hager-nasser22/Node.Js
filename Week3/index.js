
const express = require("express");
const mysql2 = require("mysql2");
const cors = require('cors');
//connection to mysql
let query = mysql2.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'route1'
});
const app = express();
//middleware for confert buffer to json
app.use(express.json());
app.use(cors());
//get all users
app.get('/users' , (req,res)=>{
    query.execute(`SELECT * FROM users`,(err,data)=>{
        if(err) {
            res.json({
                "message" : "error",
                error: err.message
            });
        }else{
            res.json({
                "message" : "success",
                data
            });
        }
    });
});
//get user by id
app.get('/users/:id' , (req,res)=>{
    let {id} = req.params;
    query.execute(`SELECT * FROM users WHERE id="${id}"`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                error: err.message
            });
        }
        return res.json({
                "message" : "success",
                data
            });
    });
});
//search user by name
app.get('/user/search/:key' , (req,res)=>{
    let {key} = req.params;
    query.execute(`SELECT * FROM users WHERE name LIKE "%${key}%"`,(err,data)=>{
        if(err) {
            return res.json({
                "message" : "error",
                error: err.message
            });
        }
        return res.json({
            "message":"success",
            data
        });
    });
});
//add user
app.post('/addUser' , (req,res) =>{
    let {name,email,password} = req.body;
    query.execute(`INSERT INTO users (name , email , password) VALUES ("${name}" , "${email}" , "${password}")` , (err , data)=>{
        if(err) {
            return res.json({
                "message" : "error",
                error: err.message
            });
        }
        if(data && data.affectedRows == 0){
            return res.json({
                "message" : "notFound",
            });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//update user
app.patch('/updateUser/:id' , (req,res) =>{
    let {id} = req.params;
    let {name,email,password} = req.body;
    query.execute(`UPDATE users SET name="${name}" , email = "${email}" , password = "${password}" WHERE id="${id}"` , (err , data)=>{
        if(err) {
            return res.json({
                "message" : "error",
                error: err.message
            });
        }
        if(data && data.affectedRows == 0){
            return res.json({
                "message" : "notFound",
            });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//delete user
app.delete('/deleteUser/:id' , (req,res) =>{
    let {id} = req.params;
    query.execute(`DELETE FROM users WHERE id= "${id}"` , (err , data)=>{
        if(err) {
            return res.json({
                "message" : "error",
                error: err.message
            });
        }
        if(data && data.affectedRows == 0){
            return res.json({
                "message" : "notFound",
            });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
////////////////////////////////////////////////////////////////////////////
//////////////products////////////////
//////////////////////////////
//get all products
app.get('/products' , (req,res) =>{
    query.execute(`SELECT * FROM products`,(err , data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//get product by id
app.get('/product/:id' , (req,res)=>{
    let {id} = req.params;
    query.execute(`SELECT * FROM products WHERE id="${id}"`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        if(!data || data.length == 0){
            return res.json({
            "message" : "notFound",
        });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//search product by name
app.get('/product/search/:key' , (req,res)=>{
    let {key} = req.params;
    query.execute(`SELECT * FROM products WHERE name LIKE "%${key}%"`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        if(!data || data.length == 0){
            return res.json({
            "message" : "notFound",
        });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//create product
app.post('/products/create',(req,res)=>{
    let {name , price , description} = req.body;
    query.execute(`INSERT INTO products (name , price , description) VALUES("${name}","${price}","${description}")`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        if(data&&data.affectedRows == 0){
            return res.json({
            "message" : "notFound",
        });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});

//update product
app.patch('/product/update/:id',(req,res)=>{
    let {id} = req.params;
    let {name , price , description} = req.body;
    query.execute(`UPDATE products SET name = "${name}",price = "${price}",description = "${description}" WHERE id ="${id} "`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        if(data&&data.affectedRows == 0){
            return res.json({
            "message" : "notFound",
        });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});
//delete product
app.delete('/product/delete/:id',(req,res)=>{
    let {id} = req.params;
    query.execute(`DELETE FROM products WHERE id="${id}"`,(err,data)=>{
        if(err){
            return res.json({
                "message" : "error",
                'error' : err.message
            });
        }
        if(data&&data.affectedRows == 0){
            return res.json({
            "message" : "notFound",
        });
        }
        return res.json({
            "message" : "success",
            data
        });
    });
});

app.listen(3000 , ()=>{
    console.log("Running.........");
})
