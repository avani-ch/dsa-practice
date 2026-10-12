const reverseInteger = (number) => {
    let rev = 0
    let numCopy = number
    number = Math.abs(number)
    while (number > 0) {
        let rem = number % 10
        rev = (10 * rev) + rem
        number = Math.floor(number / 10)
    }

    return numCopy < 0 ? -rev : rev
}

console.log(reverseInteger(1234))
console.log(reverseInteger(-1234))