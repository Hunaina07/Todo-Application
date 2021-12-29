var used = document.getElementById('demo');
var items = document.getElementById('listone')

function displayli(){
  var impvalue=used.value;
  var todoli = document.createElement('li')
  todoli.setAttribute("class","liststyle")
 var txt = document.createTextNode(impvalue);
 todoli.appendChild(txt);
 items.appendChild(todoli)
 used.value=""
 var deletebtn = document.createElement("button");
 var deletetxt = document.createTextNode("DELETE");
 todoli.appendChild(deletebtn);
 deletebtn.appendChild(deletetxt);
 deletebtn.setAttribute("class","btn");
 deletebtn.setAttribute("onclick","deletetodo(this)")
var editbtn = document.createElement("button");
var editText = document.createTextNode("EDIT");
editbtn.appendChild(editText);
todoli.appendChild(editbtn);
editbtn.setAttribute("class","btn");
editbtn.setAttribute("onclick","edititem(this)")
} 

function deletetodo(element){
element.parentNode.remove()
}

function edititem(element){
    element.parentNode.firstChild.nodeValue=prompt("Enter edit value")
}

function deleteAll(){
    listone.innerHTML=""
}