let nums: number[] = [2, 4, 6, 8, 10, 20]
let res = nums.every((element, index, array) => {
    return element >= 10;
})

console.log(res)

let res2 = nums.map(Math.sqrt)
console.log(res2)