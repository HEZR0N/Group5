export async function getOrderItems(){
    return (await fetch('http://localhost:5000/api/order_items/')).json()
}

export async function getOrderItemsByOrderId(order_id){
    return (await fetch(`http://localhost:5000/api/order_items/${order_id}`)).json()
}

export async function createOrderItem(item_id, order_id, quantity=1){
    var data = {"item_id":item_id, "order_id":order_id, "quantity":quantity}
    return (await fetch(`http://localhost:5000/api/order_items/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editOrderItemById(item_id, order_id, quantity){
    var data = {"quantity":quantity}
    return (await fetch(`http://localhost:5000/api/order_items/${order_id}/${item_id}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deleteOrderitemsByOrderId(order_id){
    return (await fetch(`http://localhost:5000/api/order_items/${order_id}`, {method: 'DELETE'})).json()
}