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

export const generateFromURL = async (url: string) => {
    if (url.length === 0) {
        throw new Error('No URL was passed')
    }
    const response = await fetch(`${API_PATH}/generate/from_url?url=${url}`, {
        method: 'POST',
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        const json = await response.json()
        throw Error(JSON.stringify(json))
    }
}

export const generateMetaId = async (metaIdRequest: MetaIdRequest) => {
    const response = await fetch(`${API_PATH}/generate/meta_id`, {
        method: 'POST',
        body: JSON.stringify(metaIdRequest),
    })
    return (await response.json()) as MetaIdResponse
}
