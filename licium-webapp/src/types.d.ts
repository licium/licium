interface ISCC {
    id: string
    filename?: string
    title: string
    date: string
    iscc: string
    iscc_raw: string
    tophash: string
    transactionHash: string
    transactionLink: string
    registrationId: string
    transactionReceipts: TransactionReceipt[]
}

interface TransactionReceipt {
    status: boolean
    transactionHash: string
    transactionIndex: number
    blockHash: string
    blockNumber: number
    from: string
    to: string
    contractAddress?: string
    cumulativeGasUsed: number
    gasUsed: number
    logs: Log[]
    logsBloom: string
    events?: {
        [eventName: string]: EventLog
    }
}

type UserData = {
    version: number
    entries: IndexedISCCS
}

type IndexedISCCS = {
    [key: string]: ISCC
}

type BlockchainProviderType = 'Magic' | 'Metamask' | 'None'
