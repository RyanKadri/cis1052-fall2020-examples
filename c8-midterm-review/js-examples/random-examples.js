function findMax(myArray) {
    let largest = myArray[0];
    for(const element of myArray) {
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}

function interleave(array1, array2) {
    let resultArray = [];
    for(let i = 0; i < array1.length; i++) {
        resultArray.push(array1[i]);
        resultArray.push(array2[i]);
    }
    return resultArray;
}

// Works for arrays of different lengths
function interleaveImproved(array1, array2) {
    let resultArray = [];
    const maxLength = array1.length;
    if(array2.length > array1.length) {
        maxLength = array2.length;
    }
    for(let i = 0; i < maxLength; i++) {
        if(array1.length > i) {
            resultArray.push(array1[i]);
        }
        if(array2.length > i) {
            resultArray.push(array2[i]);
        }
    }
    return resultArray;
}