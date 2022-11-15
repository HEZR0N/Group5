export async function getPromoCodes(){
    return (await fetch('http://localhost:5000/api/promo_codes/')).json()
}

export async function getPromoCodeByCode(code){
    return (await fetch(`http://localhost:5000/api/promo_codes/${code}`)).json()
}

export async function createPromoCode(code){
    var data = {"code":code}
    return (await fetch(`http://localhost:5000/api/promo_codes/`, {method: 'POST', body: JSON.stringify(data)})).json()
}

export async function editPromoCodeByCode(old_code, new_code){
    var data = {"code":new_code}
    return (await fetch(`http://localhost:5000/api/promo_codes/${old_code}`, {method: 'PUT', body: JSON.stringify(data)})).json()
}

export async function deletePromoCodeByCode(code){
    return (await fetch(`http://localhost:5000/api/promo_codes/${code}`, {method: 'DELETE'})).json()
}