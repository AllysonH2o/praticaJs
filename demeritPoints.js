checkSpeed(72);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('ok');
        return;
    }//removi o else porque com o return sai do loop e assim diminui a indentação
    const points = Math.floor((speed - speedLimit)/5);
    if (points >= 12) console.log("License suspended");
    else console.log("points:", points);
}