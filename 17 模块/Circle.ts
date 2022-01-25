import shape = require('./IShape')

export class Circle implements shape.IShape {
    draw() {
        console.log('Cirlce is drawn (external module');
    }
}