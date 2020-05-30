const { plusMinus } = require('./index');

describe('Plus Minus', () => {
    it('should return positives = 0.500000, negatives = 0.333333 and zeros = 0.166667', () => {
        const values = plusMinus([-4, 3, -9, 0, 4, 1])

        expect(values).toHaveProperty('positives', (0.500000).toFixed(6))
        expect(values).toHaveProperty('negative', (0.333333).toFixed(6))
        expect(values).toHaveProperty('zeros', (0.166667).toFixed(6))
    })
});