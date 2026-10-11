const input = [22, 4, 1, 5, 43, 34, 1]

const findSecondSmallest = (arr) => {
    if (arr.length < 2) return "Array should have minimum 2 elements"

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

console.log(findSecondSmallest(input))
console.log(findSecondSmallest([]))
console.log(findSecondSmallest([22]))