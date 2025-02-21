function greeter(person: string[]): string {
  return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will print 'Hello, Jane Doe'

//Alternative solution
function greeter2(person: string | string[]): string {
  if(typeof person === 'string'){
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}
console.log(greeter2(user));
console.log(greeter2("Jane"));
