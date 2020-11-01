interface ISCC {
    id: string
    transactionHash: string
    filename?: string
    date: string
}

type UserData = {
    version: number
    entries: IndexedISCCS
}

type IndexedISCCS = {
    [key: string]: ISCC
}
