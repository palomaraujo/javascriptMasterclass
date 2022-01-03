const person = {
  name: "Linus Torvalds",
  city: "Helsinki", 
  year: 1969,
  getAge(){
    return(new Date().getFullYear() - this.year);
  }
}

console.log(person)
console.log(person.getAge())