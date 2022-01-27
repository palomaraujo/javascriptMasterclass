const sum = (a,b) => a+b;
const subtract = (a,b) => a-b;
const calculator = fn =>(a,b) => fn(a,b);


// console.log(calculator(sum)(2,2));
// console.log(calculator(subtract)(2,2));

const person = {
  name:"James Gosling",
  city: "Alberta",
  year: 1955,
  getAge: () => (new Date().getFullYear() - this.year),
  
}
// console.log(person)
// console.log(person.getAge())

const soma = () => { //nao pode usar
  console.log(arguments);
  let total = 0
  for (let argument in arguments){
    total+=arguments[argument];
  }
  return total;
}
// console.log(soma(1,2,3,4,5,6,7,8,9));

const somaRest = (...args) => { //pode usar com args
  let total = 0
  for (let value of args){
    total+=value;
  }
  return total;
}
console.log(somaRest(1,2,3,4,5,6,7,8,9));