const number = -23456

const countDigits = (number) => {
    const formattedNumber = Math.abs(number)?.toString()
    const test = [...formattedNumber]
    return test.length
}

console.log(countDigits(number))

const countDigitsUsingLoop = (number) => {
    let formattedNumber = Math.abs(number)

    if (formattedNumber === 0) return 1;
    let count = 0
    while (formattedNumber > 0) {
        formattedNumber = Math.floor(formattedNumber / 10)
        count++
    }
    return count
}

console.log(countDigitsUsingLoop(number))
