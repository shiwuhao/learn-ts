function employee(id:number,name:string) {
    this.id = id
    this.name = name
}

var emp = new employee(123,"admin")
employee.prototype.email = "admin@runoob.com"

console.log("员工号: "+emp.id)
console.log("员工姓名: "+emp.name)
console.log("员工邮箱: "+emp.email)