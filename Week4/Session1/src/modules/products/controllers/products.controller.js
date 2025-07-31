import query from "../../../../database/connection.js";

export const getAllProduct = (req,res) =>{
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
};
export const getProductById = (req,res)=>{
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
};
export const productSearch = (req,res)=>{
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
};
export const createProduct = (req,res)=>{
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
};
export const updateProduct = (req,res)=>{
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
};

export const  deleteProduct= (req,res)=>{
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
};