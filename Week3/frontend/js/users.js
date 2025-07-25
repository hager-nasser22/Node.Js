var usersList = [];
fetch('http://localhost:3000/users').then(response => response.json()).then(res => {
    if(res.message == "success"){
        usersList = res.data;
        showUsers();
    } else {    
        document.getElementById('tbody').innerHTML = `<tr><td colspan="3" class="text-center">No users found</td></tr>`; 
    };
});


function showUsers(){
    var container = '';
    for(let i=0 ; i < usersList.length ; i++){
        let users = usersList[i];
        container += `
        <tr>
                    <td>${users.name}</td>
                    <td>${users.email}</td>
                    <td>
                        <button class="btn btn-warning">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
        `;
    }
    document.getElementById('tbody').innerHTML = container;
}
