const rectangle = {
  x: 10,
  y: 2, 
  calculateArea(){
    return this.x * this.y;
  }
};
console.log(rectangle.calculateArea()); 

const calculateArea2 = function(){
  return this.x * this.y;
}

const rectangle2 = {
  x: 10,
  y: 2, 
  calculateArea2
};
console.log(rectangle2.calculateArea2()); 

const rectangle3 = {
  x: 40,
  y: 5, 
  calculateArea2
};
console.log(rectangle3.calculateArea2()); 