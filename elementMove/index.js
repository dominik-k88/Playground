const button = document.querySelector(".button")
let topSize = 0
let leftSize = 0
let rect = button.getBoundingClientRect()
let xOfEl = rect.x + rect.width / 2

document.addEventListener("keydown",(e) =>{
  
  const event = e.key  
  if(event === "ArrowDown") {
    down(button)
  }
  if(event === "ArrowUp") {
    up(button)
  }
  if(event === "ArrowRight") {
    right(button)
  }
  if(event === "ArrowLeft") {
    left(button)
  }
  rect = button.getBoundingClientRect()
  xOfEl = rect.x + rect.width / 2
  console.log(xOfEl)
})

function down(el) {
  topSize += 10
  el.style.marginTop = topSize + "px"
}
function up(el) {
  topSize -= 10
  el.style.marginTop = topSize + "px"
}
function right(el) {
  leftSize += 10
  el.style.marginLeft = leftSize + "px"
}
function left(el) {
  leftSize -= 10
  el.style.marginLeft = leftSize + "px"
}
document.addEventListener("mousemove", (e) => {
  const x = e.clientX
  if(Math.abs(x - xOfEl) <= 0.5 ) {
  console.log("HIT")  
  }  
})
//Animation move 
let startTime;
let phase = 0; // Tracks the phase of motion: 0 -> right, 1 -> back, 2 -> left, 3 -> back
const totalDistance = 150; // Maximum distance in one direction (from the initial position)

const animate = (timestamp) => {
  if (!startTime) startTime = timestamp;
  const elapsed = timestamp - startTime;
  // Calculate how far to move during this phase
  const progress = Math.min(elapsed / 2500, 1); // Each phase lasts 2.5 seconds
  let displacement;

  if (phase === 0) {
    // Move right
    displacement = progress * totalDistance;
  } else if (phase === 1) {
    // Move back to the initial position from the rightmost position
    displacement = (1 - progress) * totalDistance;
  } else if (phase === 2) {
    // Move left
    displacement = -progress * totalDistance;
  } else if (phase === 3) {
    // Move back to the initial position from the leftmost position
    displacement = (1 - progress) * -totalDistance;
  }
  
  button.style.transform = `translateX(${displacement}px)`;

  if (progress < 1) {
    // Continue the current phase
    requestAnimationFrame(animate);
  } else {
    // Move to the next phase
    startTime = undefined;
    phase = (phase + 1) % 4; // Cycle through 0 -> 1 -> 2 -> 3 -> 0    
    requestAnimationFrame(animate); // Start the next phase
  }
};

requestAnimationFrame(animate);