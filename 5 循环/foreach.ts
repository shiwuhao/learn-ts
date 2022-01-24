let list = [4, 5, 6]

list.forEach((val, idx, array) => {
    console.log(val, idx, array)
})

list.every(((value, index, array) => {
    console.log(value)
    if (value >= 5) {
        return true
    }
}))