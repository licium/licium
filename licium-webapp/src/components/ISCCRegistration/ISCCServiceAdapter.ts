export const generateFromURL = async (url: string) => {
    if (url.length === 0) {
        throw new Error('No URL was passed')
    }
    const response = await fetch(`/api/generate/from_url?url=${url}`, {
        method: 'POST',
    })
    if (response.status === 200) {
        return await response.json()
    } else {
        const json = await response.json()
        throw Error(JSON.stringify(json))
    }
}
