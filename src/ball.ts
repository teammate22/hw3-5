import './style.css'

let field = document.getElementById('field') as HTMLDivElement
let ball = document.getElementById('ball') as HTMLImageElement

function setCoord(event:MouseEvent) {
  ball.style.left = event.clientX - ball.offsetWidth/2+'px'
  ball.style.top = event.clientY - ball.offsetHeight/2+'px'
  if(event.clientX > field.offsetWidth - ball.offsetWidth/2){
    ball.style.left = event.clientX - ball.offsetWidth+'px'
  }
}

field.addEventListener('click',setCoord)