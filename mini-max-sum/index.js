function miniMaxSum(arr) {
    arr.sort();
    
    let minimum = 0, maximum = 0;

    for (let i = 0; i < arr.length; i++) {
        minimum += i < arr.length - 1 ? arr[i] : 0;
        maximum += i > 0 ? arr[i] : 0;
    }

    return [minimum, maximum];
}

module.exports = { miniMaxSum }