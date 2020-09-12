import { generateFromURL } from './ISCCServiceAdapter'
import { MOCK_ISCC, VALID_URL_TO_IMAGE } from '../../mocks/constants'

describe('ISCC Service Adapter', () => {
    it('should generate an ISCC for a given url', async () => {
        const actualISCC = await generateFromURL(VALID_URL_TO_IMAGE)

        expect(actualISCC).toEqual(MOCK_ISCC)
    })

    it('should throw an error if no url is passed', async () => {
        await expect(generateFromURL('')).rejects.toThrowError(
            'No URL was passed'
        )
    })

    it('should throw an error if an invalid url is passed', async () => {
        await expect(generateFromURL('https://bogus.url')).rejects.toThrowError(
            'invalid or missing URL scheme'
        )
    })
})
