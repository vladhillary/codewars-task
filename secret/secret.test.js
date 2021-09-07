const Obj = require('./secret')

test('Create inherited class', () => {

    const testObj = new Obj()

    expect(testObj).toBeInstanceOf(Obj)

})

test('Same structure', () => {

    expect(new Obj([1,2,3])).not.toStrictEqual(
        {
            value: [1,2,3],
            getSecret() {
                return this.value
            },

            setSecret(newSecret) {
                this.value = newSecret
            }
        }
    )
})
describe('Method shoud be defined', () => {

    const test = new Obj()

    it('setSecret should be defined', () => {
        expect(test.setSecret).toBeDefined()
    })
    it('getSecret should be defined', () => {
        expect(test.getSecret).toBeDefined()
    })
})


