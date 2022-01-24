//never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。

let x: never;
let y: number;

// 运行错误,数字类型不能分配给类型never
// x = 123;


// 运行正确 never 类型可以赋值给 never类型
x = (() => {
    throw new Error('exception');
})();

// 运行正确 never 类型可以赋值给 数字类型
y = (() => {
    throw new Error('exception')
})();

// 返回值为never的函数可以抛出异常的情况
function error(message: string): never {
    throw new Error(message)
}

// 返回值为never的函数 可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {

    }
}