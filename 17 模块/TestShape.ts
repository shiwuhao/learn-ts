import share = require('./IShape')
import circle = require('./Circle')
import triangle = require('./Triangle')

function drawAllShapes(shapeToDraw: share.IShape) {
    shapeToDraw.draw();
}

drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle())