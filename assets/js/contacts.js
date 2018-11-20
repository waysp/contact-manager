/*
Activity: Contact manager
*/
// TODO: Complete the program
/*
Welcome to your contacts manager!
1: List contacts
2: Add a contact
0: Quit
Here`s the list of all your contacts:
Last name: Smith, first name: John
Last name: Doe, first name: Jane
*/
console.log('Welcome to your contacts manager!')

let peoples = []
let choice

let Person = {
  //initialize the personalbar
  init: function(last, first) {
    this.last = last
    this.first = first
  },
  //Describe of peoples
  describe: function() {
    let description = 'Last name: ' + this.last + ', first name: ' + this.first
    return description
  }
}

let person1 = Object.create(Person)
person1.init('Smith', 'John')

let person2 = Object.create(Person)
person2.init('Doe', 'Jane')

peoples.push(person1, person2)
ask()

function ask() {
  console.log('1: List contacts')
  console.log('2: Add a contact')
  console.log('0: Quit')

  const nmbr = prompt('Enter your digit(1, 2 or 0): ')
  choice = parseInt(nmbr)

  switch (choice) {
    case 1:
      console.log('Here`s the list of all your contacts: ')
      listPeople()
      ask()
      break
    case 2:
      addNewPerson()
      console.log('Contact added')
      ask()
      break
    default:
      break
  }
}

function listPeople() {
  peoples.forEach(function(people) {
    console.log(people.describe())
  })
}

function addNewPerson() {
  let newPerson = Object.create(Person)

  const last = prompt('Enter last name for person: ')
  const first = prompt('Enter first name for person: ')

  newPerson.init(last, first)
  peoples.push(newPerson)
}
