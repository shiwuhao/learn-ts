let val: string | number;
val = 12;
console.log(val)
val = 'shiwuhao'
console.log(val)

function disp(name: string | string[]) {
    if (typeof name == 'string') {
        console.log(name)
    } else {
        for (const valKey in name) {
            console.log(name[valKey])
        }
    }
}

disp('12312');
disp(['21', '21321', '21312312']);

let arr: number[] | string[];