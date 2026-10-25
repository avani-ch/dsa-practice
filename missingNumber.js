const missingNumber = (arr) => {
    let n = arr.length
    const totalSum = n * (n + 1) / 2
    let partialSum = 0
    for (let i = 0; i < n; i++) {
        partialSum = partialSum + arr[i]
    }
    return totalSum - partialSum
}

console.log(missingNumber([3,4,1,0]))