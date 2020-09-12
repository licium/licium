import { rest } from 'msw'
import {
    INVALID_URL_RESPONSE_BODY,
    MOCK_ISCC,
    VALID_URL_TO_IMAGE,
} from './constants'

export const handlers = [
    rest.post('/api/generate/from_url', (req, res, ctx) => {
        const url = req.url.searchParams.get('url')

        if (url === VALID_URL_TO_IMAGE) {
            return res(ctx.status(200), ctx.json(MOCK_ISCC))
        } else {
            return res(ctx.status(422), ctx.json(INVALID_URL_RESPONSE_BODY))
        }
    }),
]
