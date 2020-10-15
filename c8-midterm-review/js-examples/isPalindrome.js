function isPalindromeReverseManual(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed === str;
}

function isPalindromeReverseManualV2(str) {
    let reversed = "";
    for(const letter of str) {
        reversed = letter + reversed;
    }
    return reversed === str;
}

function isPalindromeCheat(str) {
    return str.split("").reverse().join("") === str;
}

function isPalindromeInPlace(str) {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isPalindromeRecursive(str) {
    if(str.length <= 1) {
        return true;
    } else {
        return str[0] === str[str.length - 1] && isPalindromeRecursive(str.substr(1, str.length - 2))
    }
}