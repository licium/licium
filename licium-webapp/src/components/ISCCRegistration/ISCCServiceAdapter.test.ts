import { generateFromURL, generateMetaId } from './ISCCServiceAdapter'
import {
    VALID_ISCC,
    VALID_NEW_META_REQUEST_BODY,
    VALID_NEW_META_RESPONSE_BODY,
    VALID_URL_TO_IMAGE,
} from '../../mocks/constants'

describe('ISCC Service Adapter', () => {
    it('should generate an ISCC for a given url', async () => {
        const actualISCC = await generateFromURL(VALID_URL_TO_IMAGE)

        expect(actualISCC).toEqual(VALID_ISCC)
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

    it('should return a new meta id when passed a Meta id request', async () => {
        const actualNewMetaId = await generateMetaId(
            VALID_NEW_META_REQUEST_BODY
        )

        expect(actualNewMetaId).toEqual(VALID_NEW_META_RESPONSE_BODY)
    })
})
