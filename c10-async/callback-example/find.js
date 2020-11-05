function findFirstNumberGreaterThan10(someArray) {
    for(const element of someArray) {
        if(element > 10) {
            return element;
        }
    }
}

function findFirstNameStartsWithS(someNames) {
    for(const name of someNames) {
        if(name.startsWith("S")) {
            return element;
        }
    }
}

function find(someArray, cb) {
    for(const element of someArray) {
        if(cb(element)) {
            return element;
        }
    }
}

find([7,8,14,15], isGreaterThan10)

function isGreaterThan10(a) {
    return a > 10;
}