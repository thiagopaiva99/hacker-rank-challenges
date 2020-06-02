const { compareTriplets } = require('./index');

describe('Compare the Triplets', () => {
    it('should return [1, 1] when pass [5, 6, 7], [3, 6, 10]', () => {
        const comparasion = compareTriplets([5, 6, 7], [3, 6, 10])

        expect(comparasion).toEqual([1, 1])
    })
})