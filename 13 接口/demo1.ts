interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string,
}

const customer: IPerson = {
    firstName: 'shi',
    lastName: 'wuhao',
    sayHi: () => {
        return 'Hi';
    }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())


const other: IPerson = {
    firstName: 'shi',
    lastName: 'wuhao',
    sayHi: () => {
        return 'Hi';
    }
}