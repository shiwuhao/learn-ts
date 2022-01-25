// 联合类型接口

interface RunOptions {
    program: string,
    command: string[] | string | (() => string)
}

const options: RunOptions = {
    program: 'test1',
    command: 'Hello',
}
console.log(options.command);

options.command = ['one', 'two']
console.log(options.command);

options.command = () => 'three';
console.log(options.command);
