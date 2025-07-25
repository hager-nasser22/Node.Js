
var products = [];
var specialId ;
fetchData();

function fetchData(){
fetch('http://localhost:3000/products').then(response => response.json()).then(res=>{
    if(res.message == "success"){
        products = res.data;
        showProducts();
    }else{
        document.getElementById('tbody').innerHTML = `<tr><td colspan="4" class="text-center">No Products Found</td></tr>`; 
    };
});
}

function showProducts(){
    let containerProduct = '';
    for(let i=0 ; i<products.length ; i++){
        let productsList = products[i];
        containerProduct += `
        <tr>
                    <td>${productsList.name}</td>
                    <td>${productsList.description}</td>
                    <td>${productsList.price}</td>
                    <td>
                        <button class="btn btn-warning" onClick="dataElement(${productsList.id})">Edit</button>
                        <button class="btn btn-danger" onClick="deleteProduct(${productsList.id})">Delete</button>
                    </td>
                </tr>
        `;
    }
    document.getElementById('tbody').innerHTML = containerProduct;
};

function fetchApi(method , endpoint , data){
    let options = {
        method,headers:{"content-type":"application/json"}
    }
    if(data !== undefined){
        options.body = JSON.stringify(data);
    }
    fetch(`http://localhost:3000/${endpoint}`,options).then(response => response.json()).then(res=>{
    if(res.message == "success"){
        fetchData();
    }
});
}

function addProduct(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    // console.log(name , price , description);
    let productData = {
        name , price , description
    }
    fetchApi('POST','products/create',productData);
}

function deleteProduct(id){
    fetchApi('DELETE' , `product/delete/${id}`);
}


function dataElement(id){
    let productOne = products.filter(ele => ele.id == id);
    specialId = productOne[0].id;
    document.getElementById('name').value = productOne[0].name;
    document.getElementById('price').value = productOne[0].price;
    document.getElementById('description').value = productOne[0].description;
    document.getElementById('add').classList.add('d-none');
    document.getElementById('update').classList.add('d-block');

}

function updateProduct(){
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let productData = {
        id: specialId,name , price , description
    }
    fetchApi('PATCH',`product/update/${specialId}`,productData);
document.getElementById('add').classList.remove('d-none');
    document.getElementById('update').classList.remove('d-block');
        document.getElementById('name').value = "";
    document.getElementById('price').value = "";
    document.getElementById('description').value = "";
}