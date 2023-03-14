function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return (42 - someValue);
    }
    else {

        return (someValue - 42);
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet = distanceFromHqInFeet;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance <= 2500) {
        return (1600*0.02)+(distance-2000)*2.5;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}
// Code your solution in this file!
