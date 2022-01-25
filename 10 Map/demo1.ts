// @ts-ignore
let siteMap = new Map();
siteMap.set('google', 1);
siteMap.set('baidu', 2);
siteMap.set('taobao', 3);

console.log(siteMap)

console.log('get:' + siteMap.get('google'))
console.log('has:' + siteMap.has('google'))
console.log('size:' + siteMap.size)