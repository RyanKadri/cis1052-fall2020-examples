function findFirstPrime(numArray) {
    for(const num of numArray) {
        if(isPrime(num)) {
            return num;
        }
    }
}

// num = 10
function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

document.body.innerHTML = findFirstPrime([4, 9, 2, 16, 25, 3,5,6,7,8])