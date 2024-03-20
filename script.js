function addDetails(){
    let car={
        brand:carbrand.value,
        price:carprice.value,
        key:carkey.value 
    }
    if(car.key in localStorage){
        alert('Details already exists')
    }
    else{
        
        localStorage.setItem(car.key,JSON.stringify(car))
        alert('Details added successfully')
    }
}


function retrieveKey(){
    let key1= retrieve.value
    if(key1 in localStorage){
    let cars=JSON.parse(localStorage.getItem(key1))
    console.log(cars);
    result.innerHTML=`<div class="card" style="width:18rem;">
    <div class="card-body">
    <h5 class="card-title"> Retrieve Records</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">car Brand:${cars.brand}</li>
    <li class="list-group-item">car price:${cars.price}</li>
    <li class="list-group-item">car Key:${cars.key}</li>
    </ul>
    </div>`
}
else{
    alert(`car with key${key1} doesn't exist`)
}
}
function deleted(){
    let key1 =delet.value
    if(key1 in localStorage){
        localStorage.removeItem(key1)
    alert(`details of car with key ${key1} is removed`)
    }
    else{
        alert(`car with key ${key1} doesn't exist`)
    }
}
function clear(){
    localStorage.clear(cars)
    alert("all details cleared")
}








