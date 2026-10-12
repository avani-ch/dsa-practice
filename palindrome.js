const isPalindrome = (number) => {
    if (number < 0) return false
    let numCopy = number
    let reverse = 0;
    while (number > 0) {
        let rem = number % 10;
        reverse = (10 * reverse) + rem
        number = Math.floor(number / 10)
    }
    if (numCopy === reverse) return true
    else return false
}

console.log(isPalindrome(1234))
console.log(isPalindrome(23432))