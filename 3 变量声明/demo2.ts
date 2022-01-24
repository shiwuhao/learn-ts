// 变量作用域
var global_num = 12; // 全局变量

class Numbers {
    num_val = 13; // 实例变量
    static sval = 10; // 静态变量

    storeNum(): void {
        var local_num = 14; // 局部变量
    }
}


console.log('全局变量：' + global_num);
console.log('静态变量：' + Numbers.sval);

var obj = new Numbers();
console.log('实例变量：', obj.num_val)