const { aVeryBigSum } = require('./index')

describe('A Very Big Sum', () => {
    it('should return 5000000015 when pass 1000000001 1000000002 1000000003 1000000004 1000000005', () => {
        const sum = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])

        expect(sum).toBe(5000000015)
    })
})