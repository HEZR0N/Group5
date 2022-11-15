export async function getOrders(){
    return (await fetch('http://localhost:5000/api/orders/')).json()
}

export async function getOrderIdsByUserId(user_id){
    return (await fetch(`http://localhost:5000/api/orders/user/${user_id}`)).json()
}

export async function getOrderById(id){
    return (await fetch(`http://localhost:5000/api/orders/${id}`)).json()
}

export async function createOrder(order_number, total_price, date, user_id){
    var data = {"order_number":order_number, "total_price":total_price, "date":date, "user_id":user_id}
    return (await fetch(`http://localhost:5000/api/orders/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editOrderById(id, order_number, total_price, date, user_id){
    var data = {"order_number":order_number, "total_price":total_price, "date":date, "user_id":user_id}
    return (await fetch(`http://localhost:5000/api/orders/${id}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deleteOrderById(id){
    return (await fetch(`http://localhost:5000/api/orders/${id}`, {method: 'DELETE'})).json()
}