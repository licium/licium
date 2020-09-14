import { replaceMetaInfoOnISCC } from './ISCCModifier'

describe('ISCCModifier', () => {
    const givenIscc = {
        tophash:
            'aeed0934a90961e0fb6635e5c9bd13a4739c4c3f6e30aaffd75411d12e940316',
        bits: [
            '1001011000101110111011110101010100100101100100111000100001011111',
            '1110000110000011000110000110010110011110110011111001110001101001',
            '0011000110001010110010101100110001011001101101111110001101001100',
            '1010111011101101000010010011010010101001000010010110000111100000',
        ],
        title_trimmed: 'Title',
        extra_trimmed: 'extra foto',
        extra: 'Extra Foto',
        gmt: 'IMAGE',
        iscc: 'CCm7y4abbVN6r-CYeLkPETE1TPr-CD9TdCywdGcK3-CRWGC2JciDeP5',
        title: 'Title - Long',
    }

    const newMetaId = {
        code: 'CC7QzK1Shp4uJ',
        bits:
            '0010100101101111111001111000011100110100110001011001111111111111',
        ident: 2985859645861896000,
        title: 'some title',
        title_trimmed: 'some title',
        extra: 'some extra',
        extra_trimmed: 'some extra',
    }

    it('should replace the title', () => {
        const expectedTitle = 'Another title'

        newMetaId.title = expectedTitle
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.title).toEqual(expectedTitle)
    })

    it('should replace the title_trimmed', () => {
        const expectedTitleTrimmed = 'Another title trimmed'

        newMetaId.title_trimmed = expectedTitleTrimmed
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.title_trimmed).toEqual(expectedTitleTrimmed)
    })

    it('should replace the extra', () => {
        const expectedExtra = 'Another extra'

        newMetaId.extra = expectedExtra
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.extra).toEqual(expectedExtra)
    })

    it('should replace the extra_trimmed', () => {
        const expectedExtraTrimmed = 'Another extra trimmed'

        newMetaId.extra_trimmed = expectedExtraTrimmed
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.extra_trimmed).toEqual(expectedExtraTrimmed)
    })

    it('should replace the first part of the iscc string', () => {
        const expected =
            'AABBCCDDEEFFG-CYeLkPETE1TPr-CD9TdCywdGcK3-CRWGC2JciDeP5'

        newMetaId.code = 'AABBCCDDEEFFG'
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.iscc).toEqual(expected)
    })

    it('should replace the first sting in the bitarray', () => {
        const expected =
            '0010100101101111111001111000011100110100110001011001111111111111'

        newMetaId.bits = expected
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.bits[0]).toEqual(expected)
    })

    it('should not remove the other bits', () => {
        newMetaId.bits =
            '0010100101101111111001111000011100110100110001011001111111111111'
        const actual = replaceMetaInfoOnISCC(givenIscc, newMetaId)

        expect(actual.bits.length).toEqual(4)
    })
})
