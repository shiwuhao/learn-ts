// 继承类的方法重写
class PrinterClass {
    doPrint(): void {
        console.log('父类doPrint方法')
    }
}

class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPrint();
        console.log('子类doPrint方法')
    }
}

const printer = new StringPrinter();
printer.doPrint()