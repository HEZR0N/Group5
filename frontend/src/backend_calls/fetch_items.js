export async function getItems(){
    return (await fetch('http://localhost:5000/api/items/')).json()
}

export async function getItemById(id){
    return (await fetch(`http://localhost:5000/api/items/${id}`)).json()
}

export async function createItem(name, price, category, quantity=1, image_url=null){
    var data = {"name":name, "price":price, "category":category, "quantity":quantity, "image_url":image_url}
    return (await fetch(`http://localhost:5000/api/items/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editItemById(id, name, price, category, quantity, image_url){
    var data = {"name":name, "price":price, "category":category, "quantity":quantity, "image_url":image_url}
    return (await fetch(`http://localhost:5000/api/items/${id}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deleteItemById(id){
    return (await fetch(`http://localhost:5000/api/items/${id}`, {method: 'DELETE'})).json()
}