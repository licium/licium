import { rest } from 'msw'
import {
    INVALID_URL_RESPONSE_BODY,
    VALID_ISCC,
    VALID_NEW_META_RESPONSE_BODY,
    VALID_URL_TO_IMAGE,
} from './constants'
import { API_PATH } from '../App'

export const handlers = [
    rest.post(`${API_PATH}/generate/from_url`, (req, res, ctx) => {
        const url = req.url.searchParams.get('url')

        if (url === VALID_URL_TO_IMAGE) {
            return res(ctx.status(200), ctx.json(VALID_ISCC))
        } else {
            return res(ctx.status(422), ctx.json(INVALID_URL_RESPONSE_BODY))
        }
    }),

    rest.post(`${API_PATH}/generate/meta_id`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(VALID_NEW_META_RESPONSE_BODY))
    }),
]
