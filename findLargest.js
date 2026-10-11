const input = [22,4,1,5,43,34]

const findLargest = (arr) => {
    if (arr.length === 0) return "Array is empty"
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest(input))
console.log(findLargest([]))