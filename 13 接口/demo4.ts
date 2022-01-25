// 继承
interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

const drummer2: Musician = {
    age: 100,
    instrument: 'asdsadas',
};

const drummer = <Musician>{};
drummer.age = 10;
drummer.instrument = 'Drums'
console.log("年龄:  "+drummer.age)
console.log("喜欢的乐器:  "+drummer.instrument)