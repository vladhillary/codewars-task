const Cube = require('./cubes')

it('Same structure', () => {

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

describe('Return value by methods of class', () => {

    const test = new Cube(5)

    it('get volume', () => {

        expect(test.volume).toBe(125)
    })

    it('get surfaceArea', () => {
        expect(test.surfaceArea).toBe(150)
    })

    it('set volume', () => {
        expect(test.volume = 8).toBe(8)
    })

    it('set surfaceArea', () => {
        expect(test.surfaceArea = 54).toBe(54)
    })
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