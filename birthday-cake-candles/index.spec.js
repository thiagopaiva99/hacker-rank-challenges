const { birthdayCakeCandles } = require('./index');

describe('Birthday Cake Candles', () => {
    it('should return 2 when pass [3, 2, 1, 3]', () => {
        const candles = birthdayCakeCandles([3, 2, 1, 3])

        expect(candles).toEqual(2)
    })
})