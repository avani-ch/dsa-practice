const selectionSort = (arr) => {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }

        }
        if (arr[i] !== arr[min]) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

console.log(selectionSort([3, 5, 1, 2]))

// Time Complexity
// (n) * (n) = O(n^2)

// Space Complexity
// O(1)
