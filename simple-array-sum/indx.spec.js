const { simpleArraySum } = require('./index')

describe('Simple Array Sum', () => {
    it('should return 31 when pass 1 2 3 4 10 11', () => {
        const sum = simpleArraySum([1, 2, 3, 4, 10, 11])

        expect(sum).toBe(31)
    })

    it('should return 5789 when pass 338 65 713 595 428 610 728 573 871 868', () => {
        const sum = simpleArraySum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868])

        expect(sum).toBe(5789)
    })
})