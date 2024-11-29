const btn = document.querySelector("#btn")
const clearLast = document.querySelector("#clearLast")
const grid = document.querySelector("#grid")

btn.addEventListener("click",createBox)

function createBox() {
  const box = document.createElement("div") 
  box.classList.add("box")
  grid.appendChild(box)  
  
  const  boxes = grid.querySelectorAll("div")
  const lastBox =  boxes[boxes.length - 2]
  const lastBoxVal = lastBox ? lastBox.textContent.trim() : ""  
    if(!lastBoxVal) {
        box.textContent = "1"
    } else{
    box.textContent = parseInt(lastBoxVal) + 1
    }  
}
clearLast.addEventListener("click",() => {
  const boxes = grid.querySelectorAll("div")  
  if(boxes.length > 0) {
    grid.removeChild(boxes[boxes.length -1]) 
  }     
})