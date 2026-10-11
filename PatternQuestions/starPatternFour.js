//         *
//       * *
//     * * *
//   * * * *
// * * * * *

const n = 5

for (let i = n; i > 0; i--) {
    let row = ""
    for (let j = 1; j < i; j++) {
        row = row + " "
    }
    for (let k = 5; k >= i; k--) {
        row = row + "*"
    }
    console.log(row)
}