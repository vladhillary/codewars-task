const startMissiles = [false, false, false, false, false]

const missiles = [1, 2, 3, 4, 5]

const launchMissile = (missile) => {
    const indexLaunchedMissiles = missiles.indexOf(missile)
    
    missiles.splice(indexLaunchedMissiles, 1)

}

function launchAll() {

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            launchMissile(i + 1)

            startMissiles.splice(i, 1, true)

        }, i * 1000)
    }
}

launchAll(launchMissile)

module.exports = {
    launchAll,
    launchMissile
}

