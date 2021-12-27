const fn = function(){
  console.log(arguments);
}
fn(1,2,3,4,5,6,7,8,9);

const sum = function(){
  let total = 0;
  for(let argument in arguments){
    total += arguments[argument];
  }
  return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9));

const sum2 = function(a, b, c, ...numbers){
  let total = a + b + c;
  for(let number of numbers){
    total += number;
  }
  return total;
}

console.log(sum2(1,2,3,4,5,6,7,8,9));