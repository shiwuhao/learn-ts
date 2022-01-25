let sites = {
    site1: 'Google',
    site2: 'Baidu',
    sayHello: () => {
    }
}

sites.sayHello = () => {
    console.log('Hello')
}

interface IPoint {
    x: number;
    y: number;
}

function addPoints(p1: IPoint, p2: IPoint) {
    let x = p1.x + p2.x
    let y = p1.y + p2.y;
    return {x, y}
}

let newPoint = addPoints({x: 2, y: 4}, {x: 5, y: 6})
console.log(newPoint)