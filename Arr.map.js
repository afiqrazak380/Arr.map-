//array.map() -> same as arr.forEach() & it creates a new array

let num = [1,2,3,4,5];
let squares = num.map(square);
let cubes = num.map(cube);
cubes.map(print);
function square(element){
  return Math.pow(element, 2)
}
function cube(element){
  return Math.pow(element, 3)
}
function print(element){
  console.log(element)
}