const { diagonalDifference } = require('./index')

describe('Diagonal Difference', () => {
    it('should return 15 when pass the matrix [[11, 2, 4], [4, 5, 6], [10, 8, -12]]', () => {
        const difference = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])

        expect(difference).toBe(15)
    })
})