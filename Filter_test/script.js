let ourGroup = [
    {name:"Klara" , age: 18 },
    {name:"Dominik" , age:18 },
    {name:"Martin" , age: 25},
    {name: "Marta", age: 28},
    {name: "Viola", age: 30},
    {name:"Petr" , age: 25},
    {name:"Dita" , age: 28},
    ];
let div = document.querySelector(".container");
let chose = document.querySelector("#chose");

let infoPara = document.createElement("p");
    chose.addEventListener("change", function(){
        const result = selectingOpt() ; 
        if(result === "Vyber") {
            infoPara.textContent = ""
        }else{
            let filtered = ourGroup.filter(function(n){            
                return n.name == result;        
            });        
            infoPara.textContent = `Age is: ${filtered[0].age}`; 
        }                 
    });

infoPara.style.color = "yellow"
infoPara.style.fontSize = "1.5rem"
infoPara.style.textAlign = "center"

    function selectingOpt(){
        let selectOption = chose.options[chose.selectedIndex].textContent;
        return selectOption;
    };    
    
div.appendChild(infoPara);