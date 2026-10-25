const moveZeroes = (arr) => {
    let pointer = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            let temp = arr[i]
            arr[i] = arr[pointer]
            arr[pointer] = temp
            pointer++
        }
    }
    return arr
}

console.log(moveZeroes([1,0,4,0,3,0,0]))
console.log(moveZeroes([0]))