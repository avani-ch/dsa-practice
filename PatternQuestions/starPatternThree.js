// * * * * 
// * * * 
// * * 
// * 

const n = 4

for (let i = n; i > 0; i--) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + " * "
    }
    console.log(row)
}