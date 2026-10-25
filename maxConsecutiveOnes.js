const maxConsecutiveOnes = (arr) => {
    let currentCount = 0
    let maxConsecutiveCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++
        } else {
            currentCount = 0
        }
        if (currentCount > maxConsecutiveCount) {
            maxConsecutiveCount = currentCount
        }
    }
    return maxConsecutiveCount
}

console.log(maxConsecutiveOnes([1,1,0,0,1,1,1]))