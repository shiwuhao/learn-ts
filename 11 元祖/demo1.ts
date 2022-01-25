let tuple: [number, string, number] = [10, 'shiwuhao', 10];
tuple[0] = 100
console.log(tuple)

// 解构元祖
const [a, b, c] = tuple;
console.log(a, b, c)