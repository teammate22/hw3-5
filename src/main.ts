import './style.css'
// задание 1
class Circle {
  rad: number;
  constructor(rad: number){
    this.rad = rad;
  }

  get radius(){
    return this.rad
  }
  set radius(rad: number){
    this.rad = rad
    console.log("radius changed")
  }
  get diameter(){
    return this.rad*2
  }

  square() {
    console.log((this.rad * this.rad) * Math.PI)
  }
  length(){
    console.log(2 * this.rad * Math.PI)
  }
}

let circle = new Circle(10)
console.log(circle.radius)
circle.square()
circle.length()
circle.radius = 15
console.log(circle.radius)
console.log(circle.diameter)

// задание 2

// задание 3

// задание 4