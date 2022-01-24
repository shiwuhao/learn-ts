let a: number = 2; // 二进制10
let b: number = 3;// 二进制11
let result: number;

result = (a & b)
console.log('(a & b) => ', result)

result = (a | b);
console.log("(a | b) => ", result)

result = (a ^ b);
console.log("(a ^ b) => ",result);

result = (~b);
console.log("(~b) => ",result);

result = (a << b);
console.log("(a << b) => ",result);

result = (a >> b);
console.log("(a >> b) => ",result);

result = (a >>> 1);
console.log("(a >>> 1) => ",result);