const bubbleSort = (arr) => {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) { // loop runs n - 1 times
        let isSwapped = false // to see if the array is already sorted

        for (j = 0; j < n - 1 - i; j++) { // loop runs n - 1 - i times
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped) break;
    }
    return arr
}

console.log(bubbleSort([3, 5, 1, 2]))

// Time Complexity
// (n - 1) * (n - 1 - i) = O(n^2)

// Space Complexity
// O(1)