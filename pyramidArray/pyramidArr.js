const pyramid = (amount) => {

    if (typeof amount !== 'number') return 'Enter a number'

    if (amount < 0) return 'The number must be bigger than 0'

    if (amount === 0) return []

    let arr = []

    for (let i = 1; i <= amount; i++) {

        const subArr = []

        for (let j = 1; j <= i; j++) {

            subArr.push(i)

        }

        arr.push((subArr).fill(1))
    }

    return arr
}