//接口和数组
//接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。

interface nameList {
    [index: number]: string,
}

let list: nameList = ['shiwuhao', 'shi', 'wuhao'];
console.log('list', list)


interface ages {
    [index: string]: number
}

let ageList: ages  = {};
ageList.shi = 10;
ageList.wuhao = 10;

console.log('ageList', ageList)