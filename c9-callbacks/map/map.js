//Take in an array of numbers. Return a new array where every number is doubled
function doubleNumbers(numbers) {
    let result = [];
    for(const number of numbers) {
        result.push(number * 2)
    }
    return result;
}

//Take in an array of strings. Return a new array with the length of each string
function lengthOfStrings(strings) {
    let result = [];
    for(const string of strings) {
        result.push(string.length)
    }
    return result;
}

function mapper(array, mapperFunction) {
    let result = [];
    for(const element of array) {
        result.push(mapperFunction(element));
    }
    return result;
}

function doubleNumber(number) {
    return number * 2;
}

function stringLength(str) {
    return str.length
}

mapper([1,2,3], doubleNumber);
mapper(["Alice", "Bob", "Xavier"], stringLength);

mapper([1,2,3], function(num) { return num * 2 });
mapper(["Alice", "Bob", "Xavier"], function(str) { return str.length });

mapper([1,2,3], num => num * 2);
mapper(["Alice", "Bob", "Xavier"], str => str.length);