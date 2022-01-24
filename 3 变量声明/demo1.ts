let uname: string = 'shiwuhao';
let source1: number = 50;
let source2: number = 30.5;
let sum = source1 + source2
console.log('名字：' + uname);
console.log('科目1成绩：' + source1);
console.log('科目2成绩：' + source2);
console.log('总分：' + sum);


let str = '1';
let str2: number = <number><any>str;

console.log(str, str2,1)
