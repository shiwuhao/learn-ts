class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    run(): void {
        console.log('发动机为：' + this.engine)
    }
}

const car = new Car('Engine 1');
console.log('型号为：' + car.engine)
car.run();