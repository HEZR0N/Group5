export async function getUsers(){
    return (await fetch('http://localhost:5000/api/users/')).json()
}

export async function getUserById(id){
    return (await fetch(`http://localhost:5000/api/users/${id}`)).json()
}

export async function createUser(name, email, hash, isAdmin=false, apiToken=null, promoCode=null){
    var data = {"name":name, "email":email, "hash":hash, "isAdmin":isAdmin, "apiToken":apiToken, "promoCode":promoCode}
    return (await fetch(`http://localhost:5000/api/users/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editUserById(id, name, email, hash, isAdmin, apiToken, promoCode){
    var data = {"name":name, "email":email, "hash":hash, "isAdmin":isAdmin, "apiToken":apiToken, "promoCode":promoCode}
    return (await fetch(`http://localhost:5000/api/users/${id}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deleteUserById(id){
    return (await fetch(`http://localhost:5000/api/users/${id}`, {method: 'DELETE'})).json()
}