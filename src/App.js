

function App() {
  return null

}

//Small Exercise//
class Person {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  greet(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  }
}
    
let person1 = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
let person2 = new Person('Jordan', 'jordan@aol.com',  '495-586-3456');

person1.greet(person2);
person2.greet(person1);

function printInfo(person) {
  console.log(person.name + ': ' + person.email + ', ' + person.phone)
}

printInfo(person1);
printInfo(person2);
//End Small Exercise//

//Medium Exercise//
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}



export default App;
