let intervalVal;

const changeColor =()=>{
  if(!intervalVal){
    intervalVal = setInterval(flashText,500)
  }
}
const flashText = ()=>{
  const targetText = document.getElementById("my-box")
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)
  
  targetText.style.color = `rgb(${red},${green},${blue})`
  // targetText.className = targetText.className === "green"? "red":"green";
}
const stopFlash = ()=>{
  clearInterval(intervalVal);
  intervalVal = null;
}
document.getElementById("start").addEventListener("click",changeColor)
document.getElementById("stop").addEventListener("click",stopFlash)