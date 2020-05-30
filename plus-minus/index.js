function plusMinus(arr) {
    let zeros = 0, positives = 0, negatives = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positives++
        if (arr[i] < 0) negatives++
        if (arr[i] === 0) zeros++
    }

    return {
        positives: (positives / arr.length).toFixed(6),
        negative: (negatives / arr.length).toFixed(6),
        zeros: (zeros / arr.length).toFixed(6)
    }
}

module.exports = { plusMinus }