// This is cuter than it needs to be.
function calcGradeCute(score) {
    
    let onesPlace = score % 10;
    let modifier = ""
    if (onesPlace >= 0 && onesPlace <= 2) {
        modifier = "-"
    } else if(onesPlace >= 7 && onesPlace <= 9) {
        modifier = "+"
    }

    if(score >= 100) {
        return "A+"
    } else if(score >= 90) {
        return "A" + modifier;
    } else if(score >= 80) {
        return "B" + modifier
    } else if(score >= 70) {
        return "C" + modifier
    } else if(score >= 60) {
        return "D" + modifier
    } else {
        return "F"
    } 
}