import { API_PATH } from '../../App'

export const generateMetaId = async (metaIdRequest) => {
    const response = await fetch(`${API_PATH}/generate/meta_id`, {
        method: 'POST',
        body: JSON.stringify(metaIdRequest),
    })
    return await response.json()
}
