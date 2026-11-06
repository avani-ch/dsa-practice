const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let curr = a[i]
        let prev = i - 1
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] > arr[prev]
            prev = prev - 1
        }
        arr[prev + 1] = arr[curr]
    }
    return arr
}

console.log(insertionSort([3, 5, 1, 2]))

// Time Complexity
// (n) * (n - 1) = O(n^2 - n) = O(n^2)

// Space Complexity
// O(1)
