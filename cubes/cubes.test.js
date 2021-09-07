const Cube = require('./cubes')

test('Same structure', () => {

    expect(new Cube(20)).not.toStrictEqual(
        {
            length: 20,
            get surfaceArea() {
                return 6 * Math.pow(this.length, 2)
            },
            get volume() {
                return this.length * this.length * this.length
            },
            set surfaceArea(sA) {
                this.length = Math.pow(sA / 6, 1 / 2)
            },
            set volume(v) {
                this.length = Math.pow(v, 1 / 3)
            }
        }
    )

})


describe('Method shoud be defined', () => {

    const test = new Cube()

    it('surfaceArea should be defined', () => {
        expect(test.surfaceArea).toBeDefined()
    })
    it('volume should be defined', () => {
        expect(test.volume).toBeDefined()
    })
})