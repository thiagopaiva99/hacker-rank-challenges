function staircase(n) {
    let hashtags = '';

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            hashtags += j > (n - (i + 1)) ? '#' : ' ';
        }

        hashtags += '\n';
    }

    return hashtags;
}

module.exports = { staircase }