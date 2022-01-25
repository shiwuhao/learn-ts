let txt = new String('这是一个字符串');
let txt1 = '这是另一个字符串'
console.log('txt.constructor:' + txt.constructor, txt1)

function employee(id:number,name:string){
    this.id = id
    this.name = name;
}

var emp = new employee(123,'admin');
employee.prototype.email='admin@shiwuhao.com'
console.log("员工号: "+emp.id)
console.log("员工姓名: "+emp.name)
console.log("员工邮箱: "+emp.email)