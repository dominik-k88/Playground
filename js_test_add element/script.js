var btn = document.querySelector(".btn");
btn.addEventListener("click", myFunction);
var list = document.querySelector("#list");

function myFunction(){
    var info = prompt("Zadej název");
   var newLi = document.createElement("li");
   newLi.textContent = info;
   if(info == null || info == ""){
    alert("Nezadali jste žádnou hodnotu");
   }else{
    list.computedStyleMap.marginBottom = "1rem"
    list.appendChild(newLi);
   }
}