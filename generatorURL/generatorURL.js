function generateName() {

    let randomURL = ''

    const listOfSymbol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 0; i < 6; i++) {

        randomURL += listOfSymbol.charAt(Math.floor(Math.random() * listOfSymbol.length))

    }

    if (!photoManager.nameExists(randomURL)) return randomURL  // при запуске теста jest не видит объект photoManager, который дан по условию codewars, если убрать условие тест проходит

    return generateName()

}

module.exports = generateName