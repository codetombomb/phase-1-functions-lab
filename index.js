// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return distance < 42 ? (42 - distance) : (distance - 42) 
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
    let num = start > end ? start - end : end - start
    return num * 264
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end);
    if (feet < 400){
        return 0;
    } else if (feet > 400 && feet < 2000){
        return parseFloat(((feet * 0.02).toFixed(2) - 8).toFixed(2))
    } else if (feet > 2000 && feet < 2500){
        return 25
    } 
    return "cannot travel that far";
}

