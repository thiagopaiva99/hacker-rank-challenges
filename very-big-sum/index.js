function aVeryBigSum(ar) {
    return ar.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { aVeryBigSum }