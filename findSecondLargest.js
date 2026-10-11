const input = [22, 4, 1, 5, 43, 34, 43]

const findSecondLargest = (arr) => {
    if (arr.length < 2) return "Array should have minimum 2 elements"

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargest(input))
console.log(findSecondLargest([]))
console.log(findSecondLargest([22]))