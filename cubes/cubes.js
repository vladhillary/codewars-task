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

        return this.length * this.length * this.length;
    }

    set surfaceArea(sA) {
        this.length = Math.pow(sA / 6, 1 / 2)
    }
    set volume(v) {
        this.length = Math.pow(v, 1 / 3)
    }
}

class Cube extends Cuboid {

    constructor(length) {
        super()
        this.length = length
    }
    get surfaceArea() {
        return 6 * Math.pow(this.length, 2)
    }
    get volume() {
        return this.length * this.length * this.length
    }
    set surfaceArea(sA) {
        this.length = Math.pow(sA / 6, 1 / 2)
    }
    set volume(v) {
        this.length = Math.pow(v, 1 / 3)
    }
}