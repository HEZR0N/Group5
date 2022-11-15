export async function getCartItems(){
    return (await fetch('http://localhost:5000/api/cart_items/')).json()
}

export async function getCartItemsByUserId(user_id){
    return (await fetch(`http://localhost:5000/api/cart_items/${user_id}`)).json()
}

export async function createCartItem(item_id, user_id, quantity=1){
    var data = {"item_id":item_id, "user_id":user_id, "quantity":quantity}
    return (await fetch(`http://localhost:5000/api/cart_items/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editCartItemById(item_id, user_id, quantity){
    var data = {"quantity":quantity}
    return (await fetch(`http://localhost:5000/api/cart_items/${user_id}/${item_id}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deleteCartitemsByUserId(user_id){
    return (await fetch(`http://localhost:5000/api/cart_items/${user_id}`, {method: 'DELETE'})).json()
}