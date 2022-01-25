// 数组解构
let arr: number[] = [12, 13]
let [x, y] = arr;
console.log(x, y)

// 数组迭代
let j: any;
let nums: number[] = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j])
}

// 多维数组
let multi: number[][] = [[1, 2, 3], [23, 24, 25]]
console.log(multi[0][0])
console.log(multi[0][1])

// 函数返回
function disp(): string[] {
    return ['google', 'baidu']
}