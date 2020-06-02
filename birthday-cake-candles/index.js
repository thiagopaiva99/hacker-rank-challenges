function birthdayCakeCandles(ar) {
    let biggest = 0;

    for (let i = 0; i < ar.length; i++) {
        biggest = ar[i] > biggest ? ar[i] : biggest;
    }

    return ar.filter(number => number === biggest).length
}

module.exports = { birthdayCakeCandles }