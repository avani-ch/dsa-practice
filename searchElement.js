const input = [2, 5, 1, 8, 3]

const searchElement = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return `index : ${i}`
    }
    return "Element not found"

}

console.log(searchElement(input, 5)) // 1
console.log(searchElement(input, 99)) // returns "Element not found"