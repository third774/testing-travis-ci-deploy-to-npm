export class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(
      "Hi, my name is " + this.firstname + " " + this.lastname + "!!!"
    );
  }
}
