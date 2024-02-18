//get total
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let add = document.getElementById('t-body');
let tmp;
let mood = 'creat';


function gettotal()
{
   if(price.value != ''){
     let result = (+price.value + +taxes.value + +ads.value)
      - +discount.value;
      total.innerHTML = result;
      total.style.background = '#040';
   }else{
    total.innerHTML = '';
    total.style.background = 'red'
   }
      
}

//create product
let products = JSON.parse(localStorage.getItem('product'));



let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product);
}else{
    datapro = [];
}

submit.onclick = function(){
    let newpro = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
        
    }
    if(title.value != '' && price.value != '' && count.value != ''){
        if(mood === 'create'){
            datapro.push(newpro);
            localStorage.setItem('product',  JSON.stringify(datapro));
            showData();
    
        }else{
            datapro[ tmp] = newpro;
            mood = 'create';
            submit.innerHTML = 'create';
            showData();
        }clearData();
    }
}

//clear inputs
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.style.background = 'red'
}

//show data
function showData(){
    let table = '';
    for(let i = 0; i < datapro.length;i++){
        table +=`
          <tr>
             <td>${i+1}</td>
             <td>${datapro[i].title}</td>
             <td>${datapro[i].price}</td>
             <td>${datapro[i].taxes}</td>
             <td>${datapro[i].ads}</td>
             <td>${datapro[i].discount}</td>
             <td>${datapro[i].total}</td>
             <td>${datapro[i].count}</td>
             <td>${datapro[i].category}</td>
             <td><button onclick="updateData(${i})"id="update">update</button></td>
             <td><button onclick= "deleteData(${i})" id="delete">delete</button></td>
          </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('DeleteAll');
    if(datapro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All</button>
        `

    }else{
        btnDelete.innerHTML = '';
    }
}
showData()

//delete
function deleteData(i)
{

    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData()
   
}
function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showData()
}

//update

function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    gettotal()
    count.value = datapro[i].count;
    category.value = datapro[i].category;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
         top:0,
         behavior:'smooth'
             
    })
    
}



