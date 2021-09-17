const loopArr = require('./loopArr')

describe('return value', () => {
    it("given [1,5,87,45,8,8], 'left', 2", () => {
        expect(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)).toEqual([87, 45, 8, 8, 1, 5]);
    });

    it("given [8, 6, [1,2,3],'bla bla', true, null, undefined, 0 ,  {pass: 12345}], 'right', 5", () => {
        expect(loopArr([[1, 2, 3], 'bla bla', true, null, undefined, 0, { pass: 12345 }], 'right', 5)).toEqual([true, null, undefined, 0, { pass: 12345 }, [1, 2, 3], 'bla bla']);
    });
    it('call with first arg no array', () => {
        expect(loopArr(2, 'left', 1)).toBe('first arg should be an array')
    })

    it('call with third arg no amount of number', () => {
        expect(loopArr([1, 2, 3], 'left', null)).toBe('third arg should be a number')
    })

    it('call if amount of steps bigger than arr length', () => {
        expect(loopArr([1, 2, 3], 'left', 6)).toBe("amount of steps don't be biggest than arr length")
    })

    it('call without direction', () => {
        expect(loopArr([3,2,1],false, 2)).toBe('direction must be a right or left')
    })
})
