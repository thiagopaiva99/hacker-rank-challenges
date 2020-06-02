const { miniMaxSum } = require('./index')

describe('Mini-Max Sum', () => {
    it('should return [10, 14] when pass [1, 2, 3, 4, 5]', () => {
        const sum = miniMaxSum([1, 2, 3, 4, 5])

        expect(sum).toEqual([10, 14])
    })
})