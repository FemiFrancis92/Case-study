let tickCount = 0;
function displayList(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let myobj = JSON.parse(this.responseText);
        console.log(myobj);
        setTable(myobj);
    }
    };
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos");
    xhr.send();
}
function setTable(obj) {
    let row = "";   
    for(let i = 0; i < obj.length; i++) {
        let status = obj[i].completed;
        console.log(obj[i].completed);
        
        if(status == true) {

            row += `<input type = "checkbox" id = "c${i}" disabled checked>`;
        
        }
        else
        {   
            row += `<input type = "checkbox" id = "c${i}" onchange = "showMessage(this)">`;
        }

        row += `<label for = "c${i}">${obj[i].title}</label><br><hr>`;
    }
    document.querySelector(".todolist").innerHTML += row; 
}
function showMessage(checkBox) {


    if(checkBox.checked == true){
        tickCount++;
    }
    else {
        tickCount--;
    }
    if(tickCount == 5) {
        alert("Congrats. 5 Tasks have been Successfully Completed ");
    }
}




