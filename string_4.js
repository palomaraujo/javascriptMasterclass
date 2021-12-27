let counter = 0;

console.time("Performance");
while(counter < 10000){
    new String("Javascript");
    counter++;
}

console.timeEnd("Performance");