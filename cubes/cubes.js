class Cuboid {

    constructor(length, width, height) {

        this.length = length;
        this.width = width;
        this.height = height;
    }

    get surfaceArea() {

        return 6 * Math.pow(this.length, 2);
    }

    get volume() {

        return Math.pow(this.length, 3)
    }

    set surfaceArea(sA) {
        this.length = Math.pow(sA / 6, 1 / 2)
    }
    set volume(v) {
        this.length = Math.pow(v, 1 / 3)
    }
}

class Cube extends Cuboid {

    constructor(length = 0) {
        super()
        this.length = length
        this._volume = Math.pow(this.length, 3)
        this._surfaceArea = 6 * Math.pow(this.length, 2)
    }
    get surfaceArea() {
        if (typeof this.length !== 'number') return 'enter a nubmer for create instance'
        return this._surfaceArea
    }
    get volume() {
        if (typeof this.length !== 'number') return 'enter a nubmer for create instance'
        return this._volume
    }
    set surfaceArea(sA) {
        if (typeof this.length !== 'number') return 'enter a nubmer for create instance'
        if (typeof sA !== 'number') return 'enter a nubmer for use this method'
        this.length = Math.pow(sA / 6, 1 / 2)
    }
    set volume(v) {
        if (typeof v !== 'number') return 'enter a nubmer for use this method'
        this.length = Math.pow(v, 1 / 3)
    }
}

module.exports = Cube