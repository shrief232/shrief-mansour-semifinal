let client = document.getElementById('client');
let company = document.getElementById('company');
let mobNumber = document.getElementById('mob-no');
let email = document.getElementById('email');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let addTable = document.getElementById('tbody');
let mood = 'create'; 
let tmp;

// create client data
let data = JSON.parse(localStorage.getItem('data'));

let dataClient;
if(localStorage.data != null){
    dataClient = JSON.parse(localStorage.data);
}else{
    dataClient = [];
}

submit.onclick = function(){
    let newClient = {
        client : client.value,
        company : company.value,
        mobNumber : mobNumber.value,
        email : email.value,
        category : category.value,
    }
    if(client != '' && company != '' && mobNumber != '' && email != '' &&  category != ''){
       if(mood === 'create'){
        dataClient.push(newClient);
        localStorage.setItem('data',JSON.stringify(dataClient));
        showData()
       }else{
        dataClient[ tmp] = newClient;
        mood = 'create';
        submit.innerHTML = 'submit';
        showData();
       }
        
    }clearData();
    
}


//show data
function showData(){
    let table = '';
    for(let i = 0; i < dataClient.length; i++){
        table +=`
            <tr>
              <td>${i+1}</td>
              <td>${dataClient[i].client}</td>
              <td>${dataClient[i].company}</td>
              <td>${dataClient[i].mobNumber}</td>
              <td>${dataClient[i].email}</td>
              <td>${dataClient[i].category}</td>
              <td><button onclick="updateData(${i})"id="update">update</button></td>
              <td><button onclick= "deleteData(${i})" id="delete">delete</button></td>
            </tr>     
        `
    }
    document.getElementById('tbody').innerHTML = table;
   
}
showData();

// clear input

function clearData(){
    client.value = '';
    company.value = '';
    mobNumber.value = '';
    email.value = '';
    category.value = '';
}
function deleteData(i){
    dataClient.splice(i,1);
    localStorage.data = JSON.stringify(dataClient);
    showData() 
}

function updateData(i){
    client.value = dataClient[i].client;
    company.value = dataClient[i].company;
    mobNumber.value = dataClient[i].mobNumber;
    email.value = dataClient[i].email;
    category.value = dataClient[i].category;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
         top:0,
         behavior:'smooth'       
    })
}    




      