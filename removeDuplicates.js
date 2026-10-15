const removeDuplicates = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i]
        }
    }
    return {
        uniqueElementsCount: x + 1,
        array: arr
    }
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7]))