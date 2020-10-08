function doAThing() {
    let a = 123;
    let b = 234;
    return a + b;
}

function doAnotherThing() {
    let c = doAThing();
    return c;
}

let d = doAnotherThing();