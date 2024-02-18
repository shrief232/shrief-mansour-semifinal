let price = document.getElementById('total-2');
let quantity = document.getElementById('quantity-1');
let search = document.getElementById('search');
let total = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let client = document.getElementById('to-name');
let products = JSON.parse(localStorage.getItem('product'));
let add = document.getElementById('add');
let fatora;

if(localStorage.fatora != null){
    fatora = JSON.parse(localStorage.getItem('Invoice'));
}else{
    fatora = [];
}
add.onclick = function(){
    let newAdd = {
        title:fatora.title,
        total:fatora.total,
        quantity:quantity.value,
         
    }
    if( quantity.value != ''){

        fatora.push(newAdd);
        localStorage.setItem('Invoice',  JSON.stringify(fatora));
        showData();
    
    }//else{
       // alert('please enter quantity');
    //}
     
}

// search Item

function searchItem(value){
    
    let table = '';
    
    for(i = 0 ; i < products.length ; i++){
        if(products[i].title.includes(value)){
                
            table =`
                <tr id="tbody">
                 <td>${products[i].title}</td>
                 <td>${products[i].total}</td>
                 <td><input onkeyup="getsubtotal()" type="number" id="quantity-1" placeholder="quantity"></td>
                 <td><button onclick= "deleteData()" id="delete">${'x'}</button></td>
                </tr> 
    
                
                `   
        }
    }
    
    document.getElementById('tbody').innerHTML = table;
       
       
}




//add to invoice

function showData(){
    
    let table = '';

    for(i = 0 ; i < fatora.length ; i++){
        if(fatora[i].title){
            
            table =`
            <tr id="t-body">
             <td>${i}</td>
             <td>${fatora[i].title}</td>
             <td>${fatora[i].total}</td>
             <td>${quantity.value}</td>
             <td>${getsubtotal()}</td>
             <td><button onclick= "deleteData()" id="delete">${'x'}</button></td>
            </tr> 

            
            `
        
            
        }
   }
   document.getElementById('t-body').innerHTML = table ;
   
}





//get total

function getsubtotal(){
    if (quantity.value != ''){
        let result = ( +fatora[i].total * +quantity.value);
        total.innerHTML = result;

    }else{
        subtotal.innerHTML = total.value;
    }
    

}



function deleteData(i){

    fatora.splice(i,1);
    localStorage.fatora = JSON.stringify(fatora);
    showData()
   
}
         
 



 
