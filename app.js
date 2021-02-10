function handleClick(){

    console.log("button clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://reqres.in/api/users/2', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function(){
        console.log("Progres...");
    }

    xhr.onload = function(){
      
            console.log(this.responseText);
        
    }
    let param = `{"name": "morpheus123","job": "leader"}`;

    xhr.send(param);

}

function handleClickpop(){
    console.log("Populate clicked");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function(){
      
            let obj = JSON.parse(this.responseText);
            let obj2 = [];
            let i=0;
            for(key in obj){
                if(parseInt(obj[key].id)%10==0){
                    obj2[i++] = obj[key];
                }
            }
            console.log(obj2);
            let list = document.getElementById("list");
            let str = "<tr><th>keys</th><th>value</th></tr>";
            for(key in obj2){
                str += `<tr><td>${obj2[key].id}</td>  <td>${obj2[key].completed}</td></tr>`;
            }
            list.innerHTML=str;
    }

    xhr.send();
}