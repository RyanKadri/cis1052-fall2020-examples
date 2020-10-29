// Check if all numbers in an array are even
function areAllNumbersEven(numArray) {
    for(const number of numArray) {
        if(number % 2 === 1) {
            return false;
        }
    }
    return true;
}

// Check if all names in an array are <20 characters
function areAllNamesShort(nameArray) {
    for(const name of nameArray) {
        if(name.length > 20) {
            return false;
        }
    }
    return true;
}

function checkAllMatch(someArray, matcherFunction) {
    for(const element of someArray) {
        if(!matcherFunction(element)) {
            return false;
        }
    }
    return true;
}

checkAllMatch([2,4,6,8], isEven);
checkAllMatch(["Alice", "Bob", "Xavier"], isStringShorterThan(20))

function isEven(num) {
    return num % 2 === 0;
}

function isNameShort(name) {
    return name.length < 20;
}

function isStringShorterThan(num) {
    return function(str) {
        return str.length < num;
    }
}

isStringShorterThan(20)