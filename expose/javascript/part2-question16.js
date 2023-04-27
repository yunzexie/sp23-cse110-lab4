function printOddandR(stats) {
    for (const property in stats) {
        if (property.startsWith('r')) {
            console.log(stats[property]);
        } else if (stats[property]%2 == 1) {
            console.log(stats[property]);
        }
    }
}

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

printOddandR(statistics);