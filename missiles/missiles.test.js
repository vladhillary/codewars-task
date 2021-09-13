const { launchAll } = require('./missiles')
const { launchMissile } = require('./missiles')
jest.useFakeTimers()

describe('test launch func', () => {

    it('test', done => {

        try {

            const launchMissile = jest.fn();

            launchAll(launchMissile)

            jest.advanceTimersByTime(1000);

            expect(launchMissile).toHaveBeenCalled()
            expect(launchMissile).toBeCalled();
            done()

        } catch (err) {
            done(err)
        }

    })
})
