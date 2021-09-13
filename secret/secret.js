class Obj {
    constructor(secret='some secret') {
        this.value = secret
    }

    getSecret() {
        return this.value
    }

    setSecret(newSecret) {
        this.value = newSecret
    }
}

function createSecretHolder(secret) {
    const newObj = new Obj(secret)
    return newObj
}

module.exports = Obj