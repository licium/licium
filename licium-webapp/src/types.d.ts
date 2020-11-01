interface ISCC {
    id: string
    filename?: string
    date: string
    iscc: string
    iscc_raw: string
    tophash: string
    transactionHash: string
    transactionLink: string
    registrationId: string
}

type UserData = {
    version: number
    entries: IndexedISCCS
}

type IndexedISCCS = {
    [key: string]: ISCC
}
