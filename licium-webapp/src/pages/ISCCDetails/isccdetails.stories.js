import React from 'react'
import ISCCDetailsView from './ISCCDetailsView'

const iscc = {
    iscc: 'CCEqyaQMDzYTK-CTUGBMZio4Xzd-CD1dvwHcNHfi1-CRDg3NoToS7VV',
    iscc_raw:
        '0052df7dc1bb8b19ef10a2fcb67920c01c7e204584a2ccb7bb883130c35716a633c6f7aa',
    title:
        'Decentralization and Scarcity - Blockchain and the Cultural Industries',
    title_trimmed:
        'decentralization and scarcity blockchain and the cultural industries',
    tophash: 'c35716a633c6f7aa2ebdf00b79bd0be093e73505711fd7524a4e4a77700f4015',
    gmt: 'text',
    bits: [
        '0101001011011111011111011100000110111011100010110001100111101111',
        '1010001011111100101101100111100100100000110000000001110001111110',
        '0100010110000100101000101100110010110111101110111000100000110001',
        '1100001101010111000101101010011000110011110001101111011110101010',
    ],
    filename: 'Paper_2.pdf',
    id: '0500b71d-5a2a-45a6-babb-5e201a685717',
    date: '2020-11-03T20:12:04.842Z',
    transactionReceipts: [
        {
            blockHash:
                '0x73b2f5bc7ac4012c33fb93b2d0f118a89aa13644623881c0e97992bab96e2d5e',
            blockNumber: 8432541,
            contractAddress: null,
            cumulativeGasUsed: 26611,
            from: '0x938f4d9d01413b4da29f44dfde146e075330f16f',
            gasUsed: 26611,
            logs: [
                {
                    address: '0x4945d63B509e137b0293Bd958cf97B61996c0fB9',
                    blockHash:
                        '0x73b2f5bc7ac4012c33fb93b2d0f118a89aa13644623881c0e97992bab96e2d5e',
                    blockNumber: 8432541,
                    data:
                        '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000240052df7dc1bb8b19ef10a2fcb67920c01c7e204584a2ccb7bb883130c35716a633c6f7aa000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020c35716a633c6f7aa2ebdf00b79bd0be093e73505711fd7524a4e4a77700f4015',
                    logIndex: 0,
                    removed: false,
                    topics: [
                        '0x402e29a414299304470042d6c1c914d84d55d4d46df0cf5aa4fe39ce525dc3a1',
                        '0x000000000000000000000000938f4d9d01413b4da29f44dfde146e075330f16f',
                    ],
                    transactionHash:
                        '0xc66bb5202e606e3cc20f450e8f643da639bf9e22e82600436a2f08aeb5e8b3d2',
                    transactionIndex: 0,
                    transactionLogIndex: '0x0',
                    type: 'mined',
                    id: 'log_37661f93',
                },
            ],
            logsBloom:
                '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000080020000000000000000000000000000000010000000000000000000000000200000000000000000000000000000000000000000020000000000000000000000000000000000000080000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000',
            status: true,
            to: '0x4945d63b509e137b0293bd958cf97b61996c0fb9',
            transactionHash:
                '0xc66bb5202e606e3cc20f450e8f643da639bf9e22e82600436a2f08aeb5e8b3d2',
            transactionIndex: 0,
        },
    ],
    transactionLink:
        'https://blockexplorer.bloxberg.org/tx/0xc66bb5202e606e3cc20f450e8f643da639bf9e22e82600436a2f08aeb5e8b3d2',
    transactionHash:
        '0xc66bb5202e606e3cc20f450e8f643da639bf9e22e82600436a2f08aeb5e8b3d2',
    registrationId: '29C3XxdrziNfM',
}

export default {
    title: 'Pages/ISCCDetailsView',
    component: ISCCDetailsView,
}

export const Default = () => <ISCCDetailsView iscc={iscc} />
