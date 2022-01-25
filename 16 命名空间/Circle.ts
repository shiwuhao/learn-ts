/// <reference path = "IShape.ts" />
namespace Drawing {
    export class Circle extends IShape {
        public draw() {
            console.log('Circle is Drawn');
        }
    }
}