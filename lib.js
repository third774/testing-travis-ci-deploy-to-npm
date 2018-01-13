export class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  greet() {
    console.log(
      "Hi, my name is " + this.firstname + " " + this.lastname + "!!!!!!!"
    );
  }

  tellAge() {
    console.log("I'm " + this.age + " years old!");
  }
}
