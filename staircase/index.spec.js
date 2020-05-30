const { staircase } = require('./index');

describe('Stair Case', () => {
    it('should render a 3x3 stair case', () => {
        const draw = staircase(3);

        let expectedDraw = '  #\n'
        expectedDraw += ' ##\n'
        expectedDraw += '###\n'

        expect(draw).toEqual(expectedDraw)
    })

    it('should render a 6x6 stair case', () => {
        const draw = staircase(6);

        let expectedDraw = '     #\n'
        expectedDraw += '    ##\n'
        expectedDraw += '   ###\n'
        expectedDraw += '  ####\n'
        expectedDraw += ' #####\n'
        expectedDraw += '######\n'

        expect(draw).toEqual(expectedDraw)
    })
})