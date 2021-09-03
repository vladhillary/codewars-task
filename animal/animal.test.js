const {Animal} = require('./animal')
const {Dog} = require('./animal')
const {Cat} = require('./animal')
const {Shark} = require('./animal')

test('Inherit class', () => {

    const testDog = new Dog()
    const testCat = new Cat()
    const testShark = new Shark()

    expect(testDog).toBeInstanceOf(Dog)
    expect(testCat).toBeInstanceOf(Cat)
    expect(testShark).toBeInstanceOf(Shark)

})

