const { Animal } = require('./animal')
const { Dog } = require('./animal')
const { Cat } = require('./animal')
const { Shark } = require('./animal')

test('Create inherited class', () => {

    const testDog = new Dog()
    const testCat = new Cat()
    const testShark = new Shark()

    expect(testDog).toBeInstanceOf(Dog)
    expect(testCat).toBeInstanceOf(Cat)
    expect(testShark).toBeInstanceOf(Shark)

})

test('Same structure', () => {

    expect(new Animal('Baley', 5, 4, 'sabretooth', 'tiger')).not.toStrictEqual(
        {
            name: 'Baley',
            age: 5,
            legs: 4,
            species: 'sabretooth',
            status: 'tiger',
            introduce() {
                return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
            }
        }
    )

    expect(new Shark('Peter', 2, 'shark')).not.toStrictEqual(
        {
            name: 'Peter',
            age: 2,
            status: 'shark',
            legs: 0,
            species: 'shark'
        })

    expect(new Dog('Daggy', 3, 'dog', 'Owner')).not.toStrictEqual(
        {
            name: 'Daggy',
            age: 2,
            status: 'dog',
            master: 'Owner',
            legs: 4,
            species: 'dog',
            greetMaster() {
                return `Hello ${this.master}`;
            },
            introduce() {
                return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
            }
        })

    expect(new Cat('Sally', 1, 'cat')).not.toStrictEqual(
        {
            name: 'Sally',
            age: 1,
            status: 'cat',
            legs: 4,
            status: 'cat',
            introduce() {
                return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
            }
        })

})

