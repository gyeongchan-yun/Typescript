class Student {
    full_name : string;
    constructor(public first_name, public middle_initial, public last_name) {
        this.full_name = first_name + " " + middle_initial + " " + last_name;
    }
}

interface Person {
    first_name: string;
    last_name: string;
}

function greeter(person: Person) {
  return "Hello, " + person.first_name + " " + person.last_name;
}

var user = new Student("Jane", "M", "User");

document.body.innerHTML = greeter(user);
