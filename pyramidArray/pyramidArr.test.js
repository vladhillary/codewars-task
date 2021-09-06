const pyramid = require('./pyramidArr')


describe('Return values', () => {

    it('contain sub array in array', () => {
        expect(pyramid(2)).toEqual(expect.arrayContaining(pyramid(1)))
    })

    it('Type value which less than 0', () => {
        expect(pyramid(-10)).toBe('The number must be bigger than 0')
    })

    it('Type any type', () => {
        expect(pyramid('123')).toBe('Enter a number')
        expect(pyramid([])).toBe('Enter a number')
        expect(pyramid({})).toBe('Enter a number')
        expect(pyramid(true, false)).toBe('Enter a number')
        expect(pyramid(null)).toBe('Enter a number')
        expect(pyramid(undefined)).toBe('Enter a number')
    })
})