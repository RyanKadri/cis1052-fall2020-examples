function doubleEveryNumber(arr) {
    let result = [];
    for(const element of arr) {
        result.push(element * 2);
    }
    return result;
}

function getLengthsOfStrings(arrayOfStrings) {
    let result = [];
    for(const element of arrayOfStrings) {
        result.push(element.length);
    }
    return result;
}

function readFile(cb) {
    // Do some mysterious work
    cb(fileData)
}

function map(arr, cb) {
    let result = [];
    for(const element of arr) {
        result.push(cb(element));
    }
    return result;
}

map([1,2,3], function(element) {
    return element * 2;
})
// [2,4,6]

map(["Alice", "Bob"], function(element) {
    return element.length;
})
// [5,3]