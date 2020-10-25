interface ISCC {
    id: string
    transactionHash: string
}

type UserData = {
    version: number
    entries: IndexedISCCS
}

type IndexedISCCS = {
    [key: string]: ISCC
}
