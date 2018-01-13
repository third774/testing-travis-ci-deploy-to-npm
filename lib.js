export class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  greet() {
    console.log(
      "Hi, my name is " + this.firstname + " " + this.lastname + "!!!!"
    );
    console.log("Nice to meet you!");
  }

  tellAge() {
    console.log("I'm " + this.age + " years old!");
  }
}
