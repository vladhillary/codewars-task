const File = require('./files')

test('Create inherited class', () => {

    const testFile = new File()

    expect(testFile).toBeInstanceOf(File)

})

test('Same structure', () => {

    expect(new File('test.js', 'hello world')).not.toStrictEqual(
        {
            _fullname: 'test.js',
            _filename: 'hello world',
            _extension: ['test', 'js'],
            strCount: 0,
            wordCount: 0
        }
    )

})

describe('Methods define for class File', () => {

    const test = new File()

    it('write should be defined', () => {
        expect(test.write).toBeDefined()
    })

    it('getContents should be defined', () => {
        expect(test.getContents).toBeDefined()
    })

    it('strCounter should be defined', () => {
        expect(test.strCounter).toBeDefined()
    })

    it('wordCounter should be defined', () => {
        expect(test.wordCounter).toBeDefined()
    })

    it('gets should be defined', () => {
        expect(test.gets).toBeDefined()
    })

    it('getc should be defined', () => {
        expect(test.getc).toBeDefined()
    })

})
