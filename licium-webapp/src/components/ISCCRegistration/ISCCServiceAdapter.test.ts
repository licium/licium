import { generateMetaId } from './ISCCServiceAdapter'
import {
    VALID_NEW_META_REQUEST_BODY,
    VALID_NEW_META_RESPONSE_BODY,
} from '../../mocks/constants'

describe('ISCC Service Adapter', () => {
    it('should return a new meta id when passed a Meta id request', async () => {
        const actualNewMetaId = await generateMetaId(
            VALID_NEW_META_REQUEST_BODY
        )

        expect(actualNewMetaId).toEqual(VALID_NEW_META_RESPONSE_BODY)
    })
})
