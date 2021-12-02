// Code your solution in this file!
function distanceFromHqInBlocks(currentPos) {
    return currentPos > 42 ? currentPos - 42 : 42 - currentPos;
}

function distanceFromHqInFeet(currentPos) {
    return distanceFromHqInBlocks(currentPos) * 264
}

function distanceTravelledInFeet(start, end) {
    return start < end ? (end - start) * 264 : (start - end) * 264;
}

function calculatesFarePrice(start, end) {
    const dtf = distanceFromHqInFeet(end) - distanceFromHqInFeet(start)
    if (dtf < 400) {
        return 0;
    } else if (dtf < 2000 && dtf > 400) {
        return (dtf - 400) * .02
    } else if (dtf > 2000 && dtf < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}