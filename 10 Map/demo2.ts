// @ts-ignore
let siteMap = new Map();
siteMap.set('google', 1);
siteMap.set('baidu', 2);
siteMap.set('taobao', 3);

// 迭代元素
console.log('迭代元素')
for (const siteMapElement of siteMap) {
    console.log(siteMapElement)
}

// 迭代value
console.log('迭代value')
for (const value of siteMap.values()) {
    console.log(value)
}
// 迭代key
console.log('迭代key')
for (const value of siteMap.keys()) {
    console.log(value)
}

console.log('迭代条目')
for (const value of siteMap.entries()) {
    console.log(value)
}

console.log('对象解构')
for (const [k,v] of siteMap.entries()) {
    console.log(k,v)
}