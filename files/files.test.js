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

describe('Test methods for class File', () => {

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

    it('get fullname return value', () => {
        expect(test.fullname).toBe('example.txt')
    })
    it('get filename return value', () => {
        expect(test.filename).toBe('')
    })
    it('get extension return value', () => {
        expect(test.extension).toBe('txt')
    })
    it('getContents return value', () => {
        expect(test.getContents()).toBe('')
    })
    it('write return value if user wrote any type', () => {
        expect(test.write([])).toBe(false)
    })
    it('gets return value', () => {
        expect(test.gets()).toBe('')
    })
    it('getc return value', () => {
        expect(test.getc()).toBeUndefined()
    })

})
