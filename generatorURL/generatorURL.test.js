const generateName = require('./generatorURL')

test('check length for result string', () => {
    expect(generateName()).toHaveLength(6)
})

describe('Return values', () => {
    it("value don't null", () => {
        expect(generateName()).not.toBeNull()
    })
    it("value don't undefined", () => {
        expect(generateName()).not.toBeUndefined()
    })
})