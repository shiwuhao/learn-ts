// 带参数函数
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2))

// 可选参数和默认参数
function buildName(firstName: string, lastName: string = 'def', other?: string) {
    return firstName + " " + lastName + " " + other;
}

console.log(buildName('石'))
console.log(buildName('石', '五号', '6号'))

// 剩余参数
function buildName2(firstName: string, ...resetOfName: string[]) {
    return firstName + resetOfName.join(' ')
}

console.log(buildName2('石', '五号', '六号', '七号'))

function addNumbers(...nums: number[]): number {
    let i: number, sum: number = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5))

// 匿名函数
let msg = function () {
    return 'Hello World'
}

let res = function (a: string, b: number) {
    return a + b;
}

