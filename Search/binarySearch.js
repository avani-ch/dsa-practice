const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        if (target === arr[mid]) {
            return mid
        }
        else if (target > arr[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
        mid = Math.floor((left + right) / 2)

    }
    return -1
}

console.log(binarySearch([23, 12, 5, 1, 43], 43))
console.log(binarySearch([23, 12, 5, 1, 43], 9))