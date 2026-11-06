const mergeSort = (arr) => {
    const mergeHelper = (left, right) => {
        let i = 0
        let j = 0
        let result = []
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i])
                i++
            }
            else {
                result.push(right[j])
                j++
            }
        }
        return [...result, ...left.slice(i), ...right.slice(j)]
    }
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeHelper(left, right)
}

console.log(mergeSort([3, 5, 1, 2]))

// Time Complexity
// O(n * logn)

// Space complexity
// O(n)