function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b, 0);
}

module.exports = { simpleArraySum }