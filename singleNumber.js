// Unique nums sum * 2 + for
const singleNumberSolutionOne = (arr) => {
    let currentSum = 0
    let doubleSum = ([... new Set(arr)].reduce((acc, item) => acc + item, 0)) * 2
    for (let i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i]
    }
    return doubleSum - currentSum
}

// Only reduce
const singleNumberSolutionTwo = (arr) => {
    let currentSum = arr.reduce((acc, item) => acc + item, 0)
    let doubleSum = ([... new Set(arr)].reduce((acc, item) => acc + item, 0)) * 2
    return doubleSum - currentSum
}

// XOR
const singleNumberSolutionThree = (arr) => {
    let missingNumber = 0
    for (let i = 0; i < arr.length; i++) {
        missingNumber = missingNumber ^ arr[i]
    }
    return missingNumber
}

// Hash map
const singleNumberSolutionFour = (arr) => {
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        if (!hashMap[arr[i]]) {
            hashMap[arr[i]] = 1
        } else {
            hashMap[arr[i]]++
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]] === 1) return arr[i]
    }
}

console.log(singleNumberSolutionOne([2, 4, 1, 2, 4, 3, 1]))
console.log(singleNumberSolutionTwo([2, 4, 1, 2, 4, 3, 1]))
console.log(singleNumberSolutionThree([2, 4, 1, 2, 4, 3, 1]))
console.log(singleNumberSolutionFour([2, 4, 1, 2, 4, 3, 1]))