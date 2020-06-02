function compareTriplets(a, b) {
    let firstUser = 0, secondUser = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            firstUser++;
        }

        if (a[i] < b[i]) {
            secondUser++;
        }
    }

    return [firstUser, secondUser];
}

module.exports = { compareTriplets }