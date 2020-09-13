import { API_PATH } from '../../App'

export interface MetaIdResponse {
    code: string
    bits: string
    ident: number
    title: string
    title_trimmed: string
    extra: string
    extra_trimmed: string
}

export interface MetaIdRequest {
    title: string
    extra: string
}

export const generateMetaId = async (metaIdRequest: MetaIdRequest) => {
    const response = await fetch(`${API_PATH}/generate/meta_id`, {
        method: 'POST',
        body: JSON.stringify(metaIdRequest),
    })
    return (await response.json()) as MetaIdResponse
}
