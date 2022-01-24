let num1: number = 12225.30;

//把对象的值转换为指数计数法。
console.log(num1.toExponential())

// 把数字转换为字符串，并对小数点指定位数。
console.log(num1.toFixed())
console.log(num1.toFixed(6))

// 把数字转换为字符串，使用本地数字格式顺序。
console.log(num1.toLocaleString())

// 把数字格式化为指定的长度。
console.log(num1.toPrecision(), num1.toPrecision(5))

// 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。
console.log(num1.toString(), num1.toString(2), num1.toString(8))

// 返回一个Number对象的原始数字值
console.log(num1.valueOf());