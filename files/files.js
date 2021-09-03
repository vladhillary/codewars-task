// Fun with ES6 Classes #6 - Fake Files (Basic)

class File {

    constructor(fullname, contents) {
        this._fullname = fullname
        this._filename = contents
        this._extension = this._fullname.split('.').pop();
        this.strCount = 0
        this.wordCount = 0
    }

    get fullname() {
        return this._fullname
    }

    get filename() {
        return this._filename
    }

    get extension() {
        return this._extension
    }

    getContents() {
        return this._filename
    }

    write(str) {
        this._filename += `\n${str}`
    }

    strCounter() {
        return this.strCount++
    }

    wordCounter() {
        return this.wordCount++
    }

    gets() {

        const arrWithContent = this._filename.split('\n')

        let index = this.strCounter()

        return arrWithContent[index]

    }

    getc() {

        const arrWithContent = this._filename.split('')

        let index = this.wordCounter()

        return arrWithContent[index]
    }
}