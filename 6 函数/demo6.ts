// lambda 函数 （箭头函数）
let foo = (x: number) => 10 + x;
console.log(foo(10));

let func = (x: any) => {
    if (typeof x == 'string') {
        console.log(x + '是一个字符串')
    } else if (typeof x == 'number') {
        console.log(x + '是一个数字')
    }
}

func(12)
func('shiwuhao')