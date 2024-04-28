// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if (pickup > 42) {
        return pickup - 42; 
    } else {
        return 42 - pickup;
    }
};

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(pickup, dropoff) {
    let totalDistance = 0;
    if (pickup > dropoff) {
        totalDistance = (pickup-dropoff) * 264;
    } else {
        totalDistance = (dropoff-pickup) * 264;
    }
    return totalDistance;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    if (distanceTravelled <= 400) {
        farePrice = 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        farePrice = (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}