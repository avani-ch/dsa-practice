const input = [22,4,1,-5,43,34,-3]

const findSmallest = (arr) => {
    if (arr.length === 0) return "Array is empty"
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findSmallest(input))
console.log(findSmallest([]))