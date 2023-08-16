function readInput() {
    const list = [];
    let input = prompt("Enter a integer (a negative integer to quit):");

    while (parseInt(input) >= 0 || list.length === 0) {
        if (Number.isInteger(Number(input)) && parseInt(input) >= 0) {
            list.push(parseInt(input));
        } else if (parseInt(input) < 0) {
            break;
        }
        input = prompt("Enter a integer (a negative integer to quit):");
    }

    return list;
}

function displayStats(list) {
    const sum = list.reduce((acc, num) => acc + num, 0);
    const average = list.length > 0 ? sum / list.length : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;

    const listString = list.length > 0 ? list.join(", ") : "No numbers entered";

    const resultText = list.length > 0
        ? `For the list ${listString} the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}.`
        : 'No positive integers entered.';

    alert(resultText); 
}

const inputList = readInput();
displayStats(inputList);
