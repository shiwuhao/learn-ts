// 多继承
interface Person1 {
    v1: number
}

interface Person2 {
    v2: number
}

interface Child extends Person1, Person2 {
}

const child: Child = {v1: 11, v2: 12}
console.log(child)