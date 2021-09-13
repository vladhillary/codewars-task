function loopArr(arr, direction, steps) {

    if(direction !== 'left' && direction !== 'right') return 'direction must be a right or left'

    if (!Array.isArray(arr)) return 'first arg should be an array'

    const result = [...arr]

    if (typeof steps !== 'number') return 'third arg should be a number'

    if (result.length < steps) return "amount of steps don't be biggest than arr length"

    for (let i = 0; i < steps; i++) {
        if (direction === 'left') {
            const el = result.shift()
            result.push(el)
        }
        if (direction === 'right') {
            const el = result.pop()
            result.unshift(el)
        }
    }

    return result

}

module.exports = loopArr
