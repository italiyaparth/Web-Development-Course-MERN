function randomArrayGenerator(totalDigitsOfLottery) {

    let ticketArray = new Array(totalDigitsOfLottery);

    for (let index = 0; index < ticketArray.length; index++) {
        ticketArray[index] = Math.floor(Math.random() * 10);
    }
    console.log("random");
    return ticketArray;
}

function sum(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

let winningCondition = (ticket) => {
    return sum(ticket) === 15;
    // OR
    // return ticket.every((num) => num === ticket[0]);
}

export { randomArrayGenerator, winningCondition };