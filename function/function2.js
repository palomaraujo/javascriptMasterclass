const sum = function (a, b) {
  return a+b;
}

const substract = function (a,b){
  return a-b;
}

const calculator = function (){
  return function(){
    return "calculator"
  }
}

console.log(calculator()());

const calculator2 = function (fn){
  return function(a,b){
    return fn(a,b);
  }
}

console.log(calculator2(sum)(2,2));
console.log(calculator2(substract)(2,2));