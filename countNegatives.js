const input = [-4,8,-1,-2,7]

const countNegatives = (array) => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) count++
    }
    return count
}

console.log(countNegatives(input))