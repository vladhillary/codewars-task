class obj {
    constructor(secret) {
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
    const newObj = new obj(secret)
    return newObj
}