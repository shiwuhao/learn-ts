function greet(): string {
    return 'Hello World';
}

function caller() {
    let msg = greet();
    console.log(msg)
}

caller();